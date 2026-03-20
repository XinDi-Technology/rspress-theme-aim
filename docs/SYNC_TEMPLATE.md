# 模板同步设置指南

本文档说明如何设置主仓库到轻量级模板仓库的自动同步功能。

---

## 🎯 概述

当主仓库（rspress-theme-aim）发布新版本时，会自动同步核心文件到轻量级模板仓库（rspress-theme-aim-template），确保模板始终保持最新。

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
2. 初始化为空仓库
3. 在 Settings 中勾选 "Template repository"

### 步骤 2：创建 Personal Access Token

1. 进入 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 设置：
   - **Note**: `Template Sync Token`
   - **Expiration**: No expiration（或根据需要设置）
   - **Scopes**: 勾选 `repo`（完整的仓库访问权限）
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

#### 方法 1：发布新版本

发布新版本时，同步会自动触发：

```bash
# 创建 tag
git tag -a v2.5.0 -m "Release v2.5.0"
git push origin v2.5.0
```

#### 方法 2：手动触发

1. 进入主仓库的 Actions 页面
2. 找到 "Sync to Template Repository" workflow
3. 点击 "Run workflow"
4. 点击 "Run workflow" 确认

---

## 🔍 验证同步

同步完成后，检查模板仓库：

1. 进入 `rspress-theme-aim-template` 仓库
2. 查看最新的 commit，应该看到类似：
   ```
   sync: update from rspress-theme-aim@v2.5.0
   ```
3. 检查文件是否已更新

---

## ⚠️ 注意事项

### Token 权限

- Token 需要 `repo` 权限才能推送代码
- Token 应该妥善保管，不要泄露
- 定期更新 token（建议每 90 天）

### 同步冲突

如果模板仓库有自定义修改，可能会产生冲突：

1. **解决方案 1**：在模板仓库中解决冲突
2. **解决方案 2**：重置模板仓库到同步状态

### 手动修改

如果需要手动修改模板仓库：

1. 确保修改不会被同步覆盖
2. 或者修改同步脚本，排除特定文件

---

## 🛠️ 自定义同步

### 修改同步的文件

编辑 `.github/workflows/sync-template.yml`：

```yaml
- name: Sync core files
  run: |
    # 添加或删除需要同步的文件
    cp ../your-file.txt .
```

### 修改 README 模板

编辑 workflow 中的 README 生成部分：

```yaml
- name: Update README for template
  run: |
    cat > README.md << 'EOF'
    # Your custom README
    EOF
```

---

## 📊 同步流程

```
主仓库发布新版本
        ↓
触发 sync-template.yml
        ↓
检出主仓库代码
        ↓
克隆模板仓库
        ↓
同步核心文件
        ↓
生成模板 README
        ↓
提交并推送到模板仓库
        ↓
同步完成
```

---

## ❓ 常见问题

### Q: 同步失败怎么办？

A: 检查以下几点：
1. Token 是否有效
2. Token 权限是否正确
3. 模板仓库是否存在
4. 网络连接是否正常

### Q: 如何查看同步日志？

A: 进入 Actions 页面，找到对应的 workflow run，查看详细日志。

### Q: 可以同步到多个仓库吗？

A: 可以。修改 workflow，添加多个仓库的同步步骤。

### Q: 如何禁用自动同步？

A: 删除或禁用 `.github/workflows/sync-template.yml` 文件。

---

**最后更新**：2026-03-21
