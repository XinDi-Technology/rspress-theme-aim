# 版权信息配置

本主题支持在页面底部显示版权信息，格式为 `© 2020-2023 公司名称`。

## 功能特性

- **动态年份**：支持起始年份和结束年份配置
- **可点击链接**：公司名称可设置为链接
- **智能默认值**：未配置时自动使用站点信息

## 配置方法

在 `rspress.config.ts` 的 `themeConfig` 中添加以下配置：

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  // ... 其他配置
  themeConfig: {
    // 版权信息配置（全部可选）
    companyName: '你的公司名',      // 默认使用站点 title
    companyUrl: 'https://example.com',  // 默认使用当前域名
    startYear: 2020,              // 默认 2020
    endYear: 2025,                // 默认当前年份
  },
});
```

## 配置项说明

| 配置项 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `companyName` | string | 否 | 站点 title | 显示的公司名称 |
| `companyUrl` | string | 否 | 当前域名 | 公司名称的链接地址 |
| `startYear` | number | 否 | 2020 | 版权起始年份 |
| `endYear` | number | 否 | 当前年份 | 版权结束年份 |

## 使用示例

### 示例 1：使用默认值

不配置任何版权信息，将自动使用以下默认值：
- 公司名称：站点的 `title` 配置
- 链接：当前访问的域名
- 年份：2020-当前年份

```typescript
export default defineConfig({
  title: '我的文档站',
  themeConfig: {
    // 不配置任何版权信息
  },
});
```

显示效果：
> © 2020-2025 我的文档站

### 示例 2：自定义公司信息

```typescript
export default defineConfig({
  title: '技术文档中心',
  themeConfig: {
    companyName: '示例科技有限公司',
    companyUrl: 'https://www.example.com',
  },
});
```

显示效果：
> © 2020-2025 [示例科技有限公司](https://www.example.com)

### 示例 3：自定义年份范围

```typescript
export default defineConfig({
  themeConfig: {
    companyName: '开源项目',
    startYear: 2019,
    endYear: 2024,
  },
});
```

显示效果：
> © 2019-2024 开源项目

### 示例 4：完整配置

```typescript
export default defineConfig({
  title: '人工智能制造',
  themeConfig: {
    companyName: 'A公司',
    companyUrl: 'https://a-company.com',
    startYear: 2020,
    endYear: 2025,
  },
});
```

显示效果：
> © 2020-2025 [A公司](https://a-company.com)

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
