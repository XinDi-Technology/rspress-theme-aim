---
order: 6
---

# 版权信息配置

本主题支持在页面底部显示版权信息，格式为 `© 2020-2023 公司名称 · Powered by Rspress & AIm`。

## 功能特性

- **动态年份**：支持起始年份和结束年份配置
- **可点击链接**：公司名称可设置为链接
- **Powered by**：显示技术支持链接

## 配置方法

在 `rspress.config.ts` 的 `themeConfig` 中添加以下配置：

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  // ... 其他配置
  themeConfig: {
    // 版权信息配置
    companyName: '你的公司名',      // 必填，公司名称
    companyUrl: 'https://example.com',  // 必填，公司链接
    startYear: 2020,              // 可选，默认 2020
    endYear: 2025,                // 可选，默认当前年份
    // Powered by 配置（可选）
    poweredBy: [
      { name: 'Rspress', url: 'https://rspress.rs/' },
      { name: 'AIm', url: 'https://xindi-technology.github.io/rspress-theme-aim' }
    ],
  },
});
```

## 配置项说明

| 配置项 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `companyName` | string | 是 | - | 显示的公司名称 |
| `companyUrl` | string | 是 | - | 公司名称的链接地址 |
| `startYear` | number | 否 | 2020 | 版权起始年份 |
| `endYear` | number | 否 | 当前年份 | 版权结束年份 |
| `poweredBy` | array | 否 | 见下方 | Powered by 链接配置 |

### poweredBy 配置说明

`poweredBy` 是一个数组，每个元素包含：

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `name` | string | 是 | 显示的名称 |
| `url` | string | 是 | 链接地址 |

**默认值**：
```typescript
[
  { name: 'Rspress', url: 'https://rspress.rs/' },
  { name: 'AIm', url: 'https://xindi-technology.github.io/rspress-theme-aim' }
]
```

## 使用示例

### 示例 1：基本配置

```typescript
export default defineConfig({
  themeConfig: {
    companyName: '示例科技有限公司',
    companyUrl: 'https://www.example.com',
  },
});
```

显示效果：
> © 2020-2025 [示例科技有限公司](https://www.example.com) · Powered by Rspress & AIm

### 示例 2：自定义年份范围

```typescript
export default defineConfig({
  themeConfig: {
    companyName: '开源项目',
    companyUrl: 'https://github.com/example/project',
    startYear: 2019,
    endYear: 2024,
  },
});
```

显示效果：
> © 2019-2024 [开源项目](https://github.com/example/project) · Powered by Rspress & AIm

### 示例 3：自定义 Powered by

```typescript
export default defineConfig({
  themeConfig: {
    companyName: '我的项目',
    companyUrl: 'https://my-project.com',
    poweredBy: [
      { name: 'Vue', url: 'https://vuejs.org/' },
      { name: 'Vite', url: 'https://vitejs.dev/' }
    ],
  },
});
```

显示效果：
> © 2020-2025 [我的项目](https://my-project.com) · Powered by Vue & Vite

### 示例 4：禁用 Powered by

```typescript
export default defineConfig({
  themeConfig: {
    companyName: '我的项目',
    companyUrl: 'https://my-project.com',
    poweredBy: [],  // 设置为空数组即可禁用
  },
});
```

显示效果：
> © 2020-2025 [我的项目](https://my-project.com)

### 示例 5：完整配置

```typescript
export default defineConfig({
  themeConfig: {
    companyName: '人工智能制造',
    companyUrl: 'https://xindi-technology.github.io/rspress-theme-aim/',
    startYear: 2025,
    endYear: 2026,
    poweredBy: [
      { name: 'Rspress', url: 'https://rspress.rs/' },
      { name: 'AIm', url: 'https://xindi-technology.github.io/rspress-theme-aim' }
    ],
  },
});
```

显示效果：
> © 2025-2026 [人工智能制造](https://xindi-technology.github.io/rspress-theme-aim/) · Powered by Rspress & AIm

## 样式自定义

版权信息的样式可以通过 CSS 变量进行自定义。编辑 `theme/styles/index.css` 文件：

```css
/* 版权信息容器 */
.rspress-copyright-footer {
  padding: 24px;
  border-top: 1px solid var(--rp-c-divider-light);
  background-color: var(--rp-c-bg);
}

/* 版权文字内容 */
.rspress-copyright-content {
  text-align: center;
  font-size: 14px;
  color: var(--rp-c-text-2);
}

/* 公司链接 */
.rspress-copyright-link {
  color: var(--rp-c-brand);
  text-decoration: none;
}

.rspress-copyright-link:hover {
  color: var(--rp-c-brand-dark);
  text-decoration: underline;
}

/* 分隔符 */
.rspress-copyright-divider {
  color: var(--rp-c-text-3);
  margin: 0 4px;
}

/* Powered by 文字 */
.rspress-copyright-powered-by {
  color: var(--rp-c-text-2);
}
```

## 禁用版权信息

如需完全禁用版权信息显示，可以删除或注释掉 `theme/index.tsx` 中的相关代码：

```typescript
// theme/index.tsx
function Layout(props: React.ComponentProps<typeof BasicLayout>) {
  return (
    <>
      <BasicLayout {...props} />
      {/* 注释掉以下行以禁用版权信息 */}
      {/* <CopyrightFooter /> */}
    </>
  );
}
```

## 技术实现

版权信息功能通过以下文件实现：

- `theme/index.tsx` - 主题入口，注入版权组件
- `theme/components/CopyrightFooter.tsx` - 版权信息组件
- `theme/styles/index.css` - 样式定义

如需进一步自定义版权信息的显示逻辑，可以直接修改 `CopyrightFooter.tsx` 组件。