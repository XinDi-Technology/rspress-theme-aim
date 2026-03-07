# 最后更新时间功能

Rspress 内置了"最后更新时间"功能，帮助用户了解文档的时效性。

## 配置方法

在 `rspress.config.ts` 的 `themeConfig` 中启用 `lastUpdated`：

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  themeConfig: {
    // 显示最后更新时间
    lastUpdated: true,
  },
});
```

## 工作原理

启用后，Rspress 会在构建时从 Git 历史中获取每个文档文件的最后提交时间，并在页面底部显示。

## 注意事项

- 此功能依赖于 Git 历史，确保文档已提交到 Git 仓库
- 默认值为 `false`，需要显式启用

## 示例

本项目的配置：

```typescript
themeConfig: {
  // 最后更新时间配置
  lastUpdated: true,
},
```
