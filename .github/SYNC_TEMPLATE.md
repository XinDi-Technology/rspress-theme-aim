# 模板同步设置指南

本文档说明如何设置主仓库到轻量级模板仓库的自动同步功能。

---

## 🎯 概述

当主仓库发布新版本时，会自动同步核心文件到轻量级模板仓库，确保模板始终保持最新。

---

## 📋 同步的文件

### 自动同步的文件

| 文件/目录 | 说明 |
|----------|------|
| `theme/` | 主题组件和样式 |
| `rspress.config.ts` | Rspress 配置 |
| `i18n.json` | 国际化配置 |
| `tsconfig.json` | TypeScript 配置 |
| `package.json` | 依赖配置 |
| `pnpm-lock.yaml` | 依赖锁定文件 |
| `.editorconfig` | 编辑器配置 |
| `.eslintrc.js` | ESLint 配置 |
| `.prettierrc` | Prettier 配置 |
| `.gitignore` | Git 忽略配置 |
| `LICENSE` | 许可证 |
| `docs/zh/guide/` | 中文指南文档 |
| `docs/en/guide/` | 英文指南文档 |
| `docs/public/` | 公共资源 |
| `docs/zh/_nav.json` | 中文导航 |
| `docs/en/_nav.json` | 英文导航 |
| `docs/zh/index.md` | 中文首页 |
| `docs/en/index.md` | 英文首页 |
| `docs/zh/blog/index.mdx` | 中文博客首页 |
| `docs/en/blog/index.mdx` | 英文博客首页 |
| `.github/workflows/deploy.yml` | 部署 workflow |

### 不同步的文件

| 文件/目录 | 说明 |
|----------|------|
| `docs/zh/blog/welcome.mdx` | 示例博客文章 |
| `docs/en/blog/welcome.mdx` | 示例博客文章 |
| `docs/zh/developer/` | 开发者文档 |
| `docs/en/developer/` | 开发者文档 |
| `CONTRIBUTING.md` | 贡献指南 |
| `SECURITY.md` | 安全策略 |
| `.github/ISSUE_TEMPLATE/` | Issue 模板 |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR 模板 |
| `.github/workflows/ci.yml` | CI workflow |
| `.github/workflows/release.yml` | Release workflow |
| `.github/workflows/sync-template.yml` | 同步 workflow |
| `.github/dependabot.yml` | Dependabot 配置 |

---

## 🔧 设置步骤

### 步骤 1：创建模板仓库

1. 在 GitHub 创建新仓库：`rspress-theme-aim-template`
2. 初始化为**空仓库**（不要勾选任何初始化选项）
3. 在 Settings 中勾选 "Template repository"

### 步骤 2：创建 Personal Access Token

1. 直接访问：https://github.com/settings/tokens/new
2. 或手动导航：
   - 点击 GitHub 右上角头像 → Settings
   - 左侧菜单最下方 → Developer settings
   - Personal access tokens → Tokens (classic)
   - Generate new token (classic)
3. 设置：
   - **Note**: `Template Sync Token`
   - **Expiration**: No expiration
   - **Scopes**: **必须勾选以下两项**
     - ✅ `repo`（完整的仓库访问权限）
     - ✅ `workflow`（更新 workflow 文件权限）
4. 点击 "Generate token"
5. **重要**：复制并保存 token，离开页面后无法再次查看

### 步骤 3：添加 Secret 到主仓库

1. 进入主仓库 Settings → Secrets and variables → Actions
2. 点击 "New repository secret"
3. 设置：
   - **Name**: `TEMPLATE_REPO_TOKEN`
   - **Value**: 粘贴刚才创建的 token
4. 点击 "Add secret"

### 步骤 4：测试同步

#### 方法 1：手动触发

1. 进入主仓库的 Actions 页面
2. 找到 "Sync to Template Repository" workflow
3. 点击 "Run workflow"
4. 点击 "Run workflow" 确认

#### 方法 2：发布新版本

发布新版本时，同步会自动触发。

---

## 🔍 验证同步

同步完成后，检查模板仓库：

1. 进入模板仓库
2. 查看最新的 commit，应该看到类似：
   ```
   sync: update from rspress-theme-aim@v2.5.0
   ```
3. 检查文件是否已更新

---

## ⚠️ 常见问题与解决方案

### 问题 1：Git 身份配置错误

**错误信息：**
```
Author identity unknown
*** Please tell me who you are.
fatal: empty ident name (for <runner@...>) not allowed
```

**原因：** GitHub Actions runner 没有配置 Git 用户身份。

**解决方案：** 在 workflow 中添加全局 Git 配置：
```yaml
- name: Setup Git
  run: |
    git config --global user.name "github-actions[bot]"
    git config --global user.email "github-actions[bot]@users.noreply.github.com"
```

**注意：** 必须使用 `--global` 参数，否则在后续步骤中无效。

---

### 问题 2：空仓库无法 clone

**错误信息：**
```
error: src refspec main does not match any
error: failed to push some refs to '...'
```

**原因：** 模板仓库是空的，没有 main 分支，无法 clone。

**解决方案：** 使用 `git init` 初始化，而不是 `git clone`：
```yaml
- name: Sync core files
  run: |
    mkdir -p template-repo
    cd template-repo
    git init
    git remote add origin https://x-access-token:${TOKEN}@github.com/xxx.git
    
    if git fetch origin 2>/dev/null; then
      git checkout -b main origin/main 2>/dev/null || git checkout -b main
    else
      git checkout -b main
    fi
```

---

### 问题 3：Token 缺少 workflow 权限

**错误信息：**
```
! [remote rejected] main -> main (refusing to allow a Personal Access Token to create or update workflow `.github/workflows/deploy.yml` without `workflow` scope)
error: failed to push some refs to '...'
```

**原因：** Token 只有 `repo` 权限，缺少 `workflow` 权限，无法推送 workflow 文件。

**解决方案：** 重新创建 Token，同时勾选 `repo` 和 `workflow` 权限。

| 权限 | 说明 | 必需 |
|------|------|------|
| `repo` | 完整仓库访问权限 | ✅ 是 |
| `workflow` | 更新 workflow 文件权限 | ✅ 是 |

---

### 问题 4：强制推送覆盖用户修改

**潜在问题：** 使用 `git push --force` 会覆盖模板仓库中的所有用户修改。

**解决方案：** 智能判断仓库状态，避免强制推送：
```yaml
- name: Commit and push changes
  run: |
    cd template-repo
    git add -A
    git commit -m "sync: ..." || echo "No changes to commit"
    
    if git rev-parse --verify origin/main >/dev/null 2>&1; then
      git push origin main
    else
      git push -u origin main
    fi
```

---

## 📊 同步流程

```
主仓库发布新版本 / 手动触发
            ↓
    触发 sync-template.yml
            ↓
      检出主仓库代码
            ↓
      配置 Git 身份
            ↓
      初始化模板仓库
            ↓
      同步核心文件
            ↓
      生成模板 README
            ↓
      提交并推送更改
            ↓
        同步完成
```

---

## 🛠️ 自定义同步

### 修改同步的文件

编辑 `.github/workflows/sync-template.yml`：

```yaml
- name: Sync core files
  run: |
    cd template-repo
    # 添加需要同步的文件
    cp ../your-file.txt .
    
    # 删除不需要同步的文件
    # 注释掉相应的 cp 命令即可
```

### 修改 README 模板

编辑 workflow 中的 README 生成部分。

---

## 📝 Token 权限说明

| 权限 | 说明 | 用途 |
|------|------|------|
| `repo` | 完整仓库访问 | 读写代码、创建分支等 |
| `workflow` | Workflow 文件操作 | 推送 `.github/workflows/` 下的文件 |

---

**最后更新**：2026-03-21
