# ICP 备案信息配置

本主题支持在页面底部显示 ICP 备案信息，方便符合中国大陆网站的合规要求。

## 功能特性

- **合规展示**：显示工信部备案号，链接到官方备案查询网站
- **灵活配置**：可自定义备案号，为空时不显示
- **默认备案号**：未配置时默认显示 `鲁ICP备12345678号-1`

## 配置方法

在 `rspress.config.ts` 的 `themeConfig` 中添加以下配置：

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  // ... 其他配置
  themeConfig: {
    // ICP 备案配置
    icpNumber: '鲁ICP备12345678号-1',  // 为空时不显示 ICP 备案信息
  },
});
```

## 配置项说明

| 配置项 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `icpNumber` | string | 否 | `鲁ICP备12345678号-1` | ICP 备案号，设置为空字符串时不显示 |

## 使用示例

### 示例 1：使用默认备案号

```typescript
export default defineConfig({
  themeConfig: {
    // 不配置 icpNumber，使用默认值
  },
});
```

显示效果：
> [鲁ICP备12345678号-1](https://beian.miit.gov.cn/)

### 示例 2：自定义备案号

```typescript
export default defineConfig({
  themeConfig: {
    icpNumber: '京ICP备12345678号-1',
  },
});
```

显示效果：
> [京ICP备12345678号-1](https://beian.miit.gov.cn/)

### 示例 3：隐藏 ICP 备案信息

```typescript
export default defineConfig({
  themeConfig: {
    icpNumber: '',  // 设置为空字符串，不显示 ICP 备案
  },
});
```

## 显示位置

ICP 备案信息显示在页面底部的版权信息下方：

```
© 2020-2025 公司名称
鲁ICP备12345678号-1  ← ICP 备案信息
```

## 链接地址

ICP 备案号默认链接到工信部备案查询网站：
- URL: `https://beian.miit.gov.cn/`
- 点击备案号会在新标签页打开备案查询页面

## 与版权信息一起配置

ICP 备案信息可以与版权信息一起配置：

```typescript
export default defineConfig({
  title: '我的网站',
  themeConfig: {
    // 版权信息
    companyName: '我的公司',
    companyUrl: 'https://www.example.com',
    startYear: 2020,
    endYear: 2025,
    // ICP 备案信息
    icpNumber: '沪ICP备12345678号-1',
  },
});
```

显示效果：
> © 2020-2025 [我的公司](https://www.example.com)
> 
> [沪ICP备12345678号-1](https://beian.miit.gov.cn/)

## 样式自定义

ICP 备案信息的样式可以通过 CSS 进行自定义。编辑 `theme/styles/index.css` 文件：

```css
/* ICP 备案信息容器 */
.rspress-copyright-icp {
  text-align: center;
  font-size: 14px;
  color: var(--rp-c-text-2);
  margin-top: 8px;
}

/* ICP 备案链接 */
.rspress-copyright-icp a {
  color: var(--rp-c-brand);
  text-decoration: none;
}

.rspress-copyright-icp a:hover {
  color: var(--rp-c-brand-dark);
  text-decoration: underline;
}
```

## 技术实现

ICP 备案信息功能通过以下文件实现：

- `theme/components/CopyrightFooter.tsx` - 在版权组件中渲染 ICP 备案信息
- `theme/styles/index.css` - 样式定义

如需修改 ICP 备案的显示逻辑（如修改链接地址），可以直接编辑 `CopyrightFooter.tsx` 文件中的相关代码。

## 注意事项

1. **备案号格式**：请使用标准的 ICP 备案号格式，如 `XICP备XXXXXXXX号-X`
2. **合规要求**：中国大陆网站必须显示真实的 ICP 备案号
3. **链接地址**：根据工信部要求，备案号必须链接到 `https://beian.miit.gov.cn/`
