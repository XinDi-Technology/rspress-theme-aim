# 编辑此页功能

Rspress 内置了"编辑此页"功能，允许用户直接跳转到 GitHub 编辑当前文档页面。

## 配置方法

在 `rspress.config.ts` 的 `themeConfig` 中添加 `editLink` 配置：

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  themeConfig: {
    // 编辑此页链接配置
    editLink: {
      docRepoBaseUrl: 'https://github.com/your-username/your-repo/tree/main/docs',
    },
  },
});
```

## 配置项说明

| 配置项 | 说明 |
|--------|------|
| `docRepoBaseUrl` | 文档在 GitHub 仓库中的基础路径 |

## 工作原理

Rspress 会自动将 `docRepoBaseUrl` 与当前页面的文件路径拼接，生成完整的编辑链接。

例如，当用户访问 `/guide/edit-link` 页面时，编辑链接会指向：

```
https://github.com/your-username/your-repo/tree/main/docs/guide/edit-link.md
```

## 禁用功能

如果不需要此功能，只需不配置 `editLink` 即可，默认不显示编辑链接。

## 示例

本项目的配置：

```typescript
editLink: {
  docRepoBaseUrl: 'https://github.com/XinDi-Technology/rspress-theme-aim/tree/main/docs',
},
```
