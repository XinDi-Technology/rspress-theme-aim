# 模板同步设置指南

本文档说明如何设置主仓库到轻量级模板仓库的自动同步功能。

---

## 🎯 概述

当主仓库发布新版本或手动触发时，会自动同步核心文件到轻量级模板仓库，确保模板始终保持最新。

---

## 🚀 触发方式

同步功能支持两种触发方式：

### 方式 1：发布新版本自动触发

当主仓库发布新的 Release 时，会自动触发同步：

1. 在主仓库创建新的 Release
2. 发布后自动触发 `sync-template.yml` workflow
3. 同步完成后，模板仓库会显示类似 commit：
   ```
   sync: update from rspress-theme-aim@v2.5.0
   ```

### 方式 2：手动触发

在 Actions 页面手动运行同步：

1. 进入主仓库 Actions 标签页
2. 选择 "Sync to Template Repository" workflow
3. 点击 "Run workflow" → "Run workflow"
4. 等待执行完成
5. 同步完成后，模板仓库会显示类似 commit：
   ```
   sync: update from rspress-theme-aim@latest
   ```

---

## 📋 同步的文件

### 核心文件

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

### 文档文件

| 文件 | 说明 |
|------|------|
| `docs/zh/guide/index.md` | 中文指南首页 |
| `docs/zh/guide/auto-navigation.md` | 自动导航说明 |
| `docs/zh/guide/blog.md` | 博客功能说明 |
| `docs/en/guide/index.md` | 英文指南首页 |
| `docs/en/guide/auto-navigation.md` | 自动导航说明 |
| `docs/en/guide/blog.md` | 博客功能说明 |
| `docs/zh/_nav.json` | 中文导航配置 |
| `docs/en/_nav.json` | 英文导航配置 |
| `docs/zh/index.md` | 中文首页 |
| `docs/en/index.md` | 英文首页 |
| `docs/zh/blog/index.mdx` | 中文博客首页 |
| `docs/en/blog/index.mdx` | 英文博客首页 |
| `docs/public/*` | 公共资源（图片等） |

### Workflow 文件

| 文件 | 说明 |
|------|------|
| `.github/workflows/deploy.yml` | 部署 workflow |

### 自动生成的文件

| 文件 | 说明 |
|------|------|
| `README.md` | 模板专用 README（包含快速开始指南） |

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
4. 点击 Generate token
5. 复制并保存 token（只显示一次）

### 步骤 3：配置 Secret

1. 进入主仓库 Settings → Secrets and variables → Actions
2. 点击 New repository secret
3. Name: `TEMPLATE_REPO_TOKEN`
4. Secret: 粘贴刚才创建的 Token
5. 点击 Add secret

### 步骤 4：验证同步

同步完成后，检查模板仓库：

1. 进入模板仓库
2. 查看最新的 commit，应该看到类似：
   ```
   sync: update from rspress-theme-aim@latest
   ```
   或
   ```
   sync: update from rspress-theme-aim@v2.5.0
   ```
3. 检查文件是否已更新

**同步成功的影响：**
- ✅ 模板仓库包含最新的主题文件和配置
- ✅ 用户使用模板创建项目时获得最新版本
- ✅ 基础文档（guide、blog 首页）已更新

**同步失败的影响：**
- ❌ 模板仓库停留在旧版本
- ❌ 用户无法获得最新的功能和修复
- ❌ 需要检查 Actions 日志排查问题

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
      同步核心文件（theme、config）
            ↓
      同步文档文件（guide、blog、public）
            ↓
      同步 workflow 文件
            ↓
      生成模板 README
            ↓
      提交并推送更改
            ↓
        同步完成
```

---

## 🛠️ 自定义同步

### 添加同步文件

编辑 `.github/workflows/sync-template.yml`：

```yaml
- name: Sync core files
  run: |
    cd template-repo
    # 添加需要同步的文件
    cp ../your-file.txt .
```

### 移除同步文件

注释掉或删除相应的 `cp` 命令。

### 修改 README 模板

编辑 workflow 中的 README 生成部分。

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

### 问题 4：模板仓库包含不需要的文件

**原因：** 同步脚本没有过滤不需要的文件。

**解决方案：** 脚本已经优化，现在只同步指定的文件，不会包含不需要的文件。

---

## 📝 Token 权限说明

| 权限 | 说明 | 用途 |
|------|------|------|
| `repo` | 完整仓库访问 | 读写代码、创建分支等 |
| `workflow` | Workflow 文件操作 | 推送 `.github/workflows/` 下的文件 |

---

**最后更新**：2026-03-21
