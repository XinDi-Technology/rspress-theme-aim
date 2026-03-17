# 升级指南

当你使用本模板创建了文档站后，如何同步模板的新功能？本指南提供简单快速的升级方法。

## 升级前准备

1. **备份你的自定义修改**：如果你修改了 `theme/` 目录下的文件，请先备份
2. **查看版本发布说明**：在 [Releases](https://github.com/XinDi-Technology/rspress-theme-aim/releases) 页面查看最新版本的功能更新

## 升级方法

### 方法一：手动复制（推荐）

适用于：所有用户，特别是有自定义修改的用户

#### 步骤：

1. **打开模板仓库**
   - 访问：https://github.com/XinDi-Technology/rspress-theme-aim
   - 查看最新版本的文件变更

2. **复制核心文件**

   以下文件/目录是主题功能的核心，复制到你的仓库即可：

   | 文件/目录 | 说明 | 是否必须 |
   |----------|------|---------|
   | `theme/` | 主题组件和样式 | ✅ 必须 |
   | `docs/guide/*.md` | 功能说明文档 | ❌ 可选 |
   | `docs/public/gongan-beian.png` | 公安备案图标 | ⚠️ 按需 |
   | `package.json` | 依赖版本 | ⚠️ 按需 |

3. **具体操作**

   在 GitHub 网页上操作：

   a. 打开模板仓库的 `theme/index.tsx` 文件
   b. 点击右上角 **Raw** 按钮，复制全部内容
   c. 在你的仓库中打开对应文件（或创建新文件）
   d. 粘贴内容，提交更改

   重复以上步骤，复制所有需要更新的文件。

#### 哪些文件不要覆盖？

以下文件通常包含你的自定义内容，**不要**直接覆盖：

- `rspress.config.ts` - 站点配置（除非你明确知道要更新什么）
- `docs/index.md` - 首页内容
- `docs/guide/index.md` - 指南首页
- `docs/_nav.json` - 导航配置
- `docs/guide/_meta.json` - 侧边栏配置
- `README.md` - 项目说明

### 方法二：Sync Fork（仅适用于 Fork 的仓库）

如果你是通过 **Fork** 方式创建的仓库（而非 Use this template）：

1. 在你的仓库页面点击 **Sync fork** 按钮
2. 选择 **Update branch** 或 **Discard changes**（注意：这会覆盖你的修改）

> ⚠️ **警告**：Sync fork 会覆盖所有文件，请确保已备份自定义修改！

## 处理 rspress.config.ts 的变更

当模板添加新功能时，可能会在 `rspress.config.ts` 中添加新的配置项。**不要直接覆盖**你的配置文件，而是：

### 步骤：

1. **查看模板的最新配置**：
   - 访问模板仓库的 `rspress.config.ts` 文件
   - 找到新添加的配置项

2. **手动添加配置**：
   - 在你的 `rspress.config.ts` 文件中，找到 `themeConfig` 部分
   - 复制新的配置项到你的文件中

### v1.0.0 版本配置示例

这是 v1.0.0 版本的所有配置项：

```typescript
themeConfig: {
  // 版权信息配置
  startYear: 2025,
  
  // ICP备案配置
  icpNumber: '',  // 例如：京ICP备12345678号
  
  // 公安联网备案配置
  gonganNumber: '',  // 例如：鲁公网安备12345678912345号
  
  // 编辑此页链接配置
  editLink: {
    docRepoBaseUrl: 'https://github.com/<你的用户名>/<你的仓库名>/tree/main/docs',
  },
  
  // 最后更新时间配置
  lastUpdated: true,  // 显示文档最后更新时间
}
```

## 版本对照表

| 版本 | 发布日期 | 主要功能 | 升级文件 | 配置变更 |
|------|---------|---------|---------|----------|
| v1.0.0 | 2026-03-08 | 初始版本：版权信息、ICP备案、公安备案、Edit Link、Last Updated | `theme/`, `docs/guide/`, `docs/public/gongan-beian.png` | 需添加 `startYear`、`icpNumber`、`gonganNumber`、`editLink`、`lastUpdated` 配置 |

## 升级检查清单

升级完成后，请检查以下内容：

- [ ] 站点能正常构建（GitHub Actions 显示 ✅）
- [ ] 新功能正常显示
- [ ] 原有功能没有损坏
- [ ] 自定义样式/配置仍然有效
- [ ] 新的配置项已正确添加（如果有）

## 常见问题

### Q: 升级后样式丢失了？

A: 检查 `theme/styles/index.css` 是否正确复制。如果之前有自定义样式，需要手动合并。

### Q: 如何知道哪些文件更新了？

A: 查看模板仓库的 [Commits](https://github.com/XinDi-Technology/rspress-theme-aim/commits/main) 页面，对比你最后一次同步的日期之后的所有变更。

### Q: 可以同时使用多个版本的功能吗？

A: 可以。主题功能是模块化的，你可以只复制你需要的功能对应的文件。

### Q: 升级后出现了冲突？

A: 如果你修改了 `theme/` 目录下的文件，升级时可能会冲突。建议：
1. 备份你的修改
2. 复制新版本的文件
3. 手动合并你的自定义修改

### Q: 配置文件有变更怎么办？

A: 不要直接覆盖 `rspress.config.ts`，而是：
1. 查看模板的最新配置文件
2. 找到新添加的配置项
3. 手动添加到你的配置文件中

## 获取帮助

如果在升级过程中遇到问题：

1. 查看本项目的 [Issues](https://github.com/XinDi-Technology/rspress-theme-aim/issues)
2. 提交新的 Issue，描述你的问题和操作步骤
