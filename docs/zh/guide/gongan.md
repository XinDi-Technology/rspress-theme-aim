# 公安联网备案信息配置

本主题支持在页面底部显示公安联网备案信息，方便符合中国大陆网站的合规要求。

## 功能特性

- **合规展示**：显示公安备案号，链接到公安部备案查询网站
- **图标支持**：显示公安备案图标
- **灵活配置**：可自定义备案号，为空时不显示
- **自动链接**：自动提取备案号中的数字生成查询链接

## 配置方法

在 `rspress.config.ts` 的 `themeConfig` 中添加以下配置：

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  // ... 其他配置
  themeConfig: {
    // 公安联网备案配置
    gonganNumber: '鲁公网安备12345678912345号',  // 为空时不显示公安备案信息
  },
});
```

## 配置项说明

| 配置项 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `gonganNumber` | string | 否 | `鲁公网安备12345678912345号` | 公安备案号，设置为空字符串时不显示 |

## 使用示例

### 示例 1：使用默认备案号

```typescript
export default defineConfig({
  themeConfig: {
    // 不配置 gonganNumber，使用默认值
  },
});
```

显示效果：
> ![公安备案图标](/gongan-beian.png) [鲁公网安备12345678912345号](https://beian.mps.gov.cn/#/query/webSearch?code=12345678912345)

### 示例 2：自定义备案号

```typescript
export default defineConfig({
  themeConfig: {
    gonganNumber: '京公网安备11010502030405号',
  },
});
```

显示效果：
> ![公安备案图标](/gongan-beian.png) [京公网安备11010502030405号](https://beian.mps.gov.cn/#/query/webSearch?code=11010502030405)

### 示例 3：隐藏公安备案信息

```typescript
export default defineConfig({
  themeConfig: {
    gonganNumber: '',  // 设置为空字符串，不显示公安备案
  },
});
```

## 显示位置

公安备案信息显示在页面底部的 ICP 备案信息下方：

```
© 2020-2025 公司名称
鲁ICP备12345678号-1
[图标] 鲁公网安备12345678912345号  ← 公安备案信息
```

## 链接地址

公安备案号会自动链接到公安部备案查询网站：
- URL 格式: `https://beian.mps.gov.cn/#/query/webSearch?code={备案号数字}`
- 系统会自动从备案号中提取数字部分生成查询链接
- 点击备案号会在新标签页打开备案查询页面

## 与版权信息、ICP备案一起配置

公安备案信息可以与版权信息、ICP备案信息一起配置：

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
    // 公安备案信息
    gonganNumber: '沪公网安备31011502012345号',
  },
});
```

显示效果：
> © 2020-2025 [我的公司](https://www.example.com)
> 
> [沪ICP备12345678号-1](https://beian.miit.gov.cn/)
> 
> ![公安备案图标](/gongan-beian.png) [沪公网安备31011502012345号](https://beian.mps.gov.cn/#/query/webSearch?code=31011502012345)

## 公安备案图标

公安备案信息需要配合图标显示，请按以下步骤添加图标：

1. 准备公安备案图标文件（通常为 `.png` 格式）
2. 将图标文件命名为 `gongan-beian.png`
3. 将图标文件放到 `docs/public/` 目录下

图标路径：`docs/public/gongan-beian.png`

## 样式自定义

公安备案信息的样式可以通过 CSS 进行自定义。编辑 `theme/styles/index.css` 文件：

```css
/* 公安备案信息容器 */
.rspress-copyright-gongan {
  text-align: center;
  font-size: 14px;
  color: var(--rp-c-text-2);
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

/* 公安备案图标 */
.rspress-gongan-icon {
  width: 16px;
  height: 16px;
  display: inline-block;
}

/* 公安备案链接 */
.rspress-copyright-gongan a {
  color: var(--rp-c-brand);
  text-decoration: none;
}

.rspress-copyright-gongan a:hover {
  color: var(--rp-c-brand-dark);
  text-decoration: underline;
}
```

## 技术实现

公安备案信息功能通过以下文件实现：

- `theme/components/CopyrightFooter.tsx` - 在版权组件中渲染公安备案信息
- `theme/styles/index.css` - 样式定义
- `docs/public/gongan-beian.png` - 公安备案图标

如需修改公安备案的显示逻辑，可以直接编辑 `CopyrightFooter.tsx` 文件中的相关代码。

## 注意事项

1. **备案号格式**：请使用标准的公安备案号格式，如 `X公网安备XXXXXXXXXXX号`
2. **合规要求**：中国大陆网站必须显示真实的公安备案号
3. **图标要求**：公安备案信息必须配合公安备案图标一起显示
4. **自动提取**：系统会自动从备案号中提取数字部分生成查询链接
