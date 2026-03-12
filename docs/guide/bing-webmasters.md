# Bing Webmasters 配置

本主题支持通过 Meta 标签验证方式接入 Bing Webmaster Tools，帮助监控网站在 Bing 搜索引擎中的表现。

## 功能说明

Bing Webmaster Tools 是微软提供的免费平台，用于：
- 监控网站在 Bing 搜索中的表现
- 提交站点地图（Sitemap）
- 查看搜索分析数据
- 监控网站健康状况
- 提交 URL 进行索引

## 配置步骤

### 步骤 1：获取 Bing 验证码

1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 登录微软账号（Outlook、Hotmail 等）
3. 点击"添加网站"
4. 输入网站 URL：`https://xindi-technology.github.io/rspress-theme-aim/`
5. 选择验证方式：**HTML Meta 标签**
6. 复制 `content` 中的验证码（类似 `1234567890ABCDEF`）

验证标签格式：
```html
<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
```

### 步骤 2：配置 Rspress

在 `rspress.config.ts` 中添加 `builderConfig` 配置：

```typescript
import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginSitemap } from '@rspress/plugin-sitemap';

export default defineConfig({
  base: '/rspress-theme-aim/',
  root: path.join(__dirname, 'docs'),
  title: '人工智能制造 · Rspress Theme AIm',
  plugins: [
    pluginSitemap({
      siteUrl: 'https://xindi-technology.github.io/rspress-theme-aim/',
    }),
  ],
  builderConfig: {
    html: {
      tags: [
        // Bing Webmasters 验证标签
        {
          tag: 'meta',
          attrs: {
            name: 'msvalidate.01',
            content: 'YOUR_BING_VERIFICATION_CODE', // 替换为你的验证码
          },
        },
      ],
    },
  },
  themeConfig: {
    // ... 其他配置
  },
});
```

### 步骤 3：部署并验证

1. 提交并推送代码到 GitHub
2. 等待 GitHub Actions 自动部署
3. 返回 Bing Webmaster Tools
4. 点击"验证"按钮完成验证

## 提交站点地图

验证成功后，建议提交站点地图：

1. 在 Bing Webmaster Tools 中选择你的网站
2. 左侧菜单选择"站点地图"
3. 提交站点地图 URL：
   ```
   https://xindi-technology.github.io/rspress-theme-aim/sitemap.xml
   ```

## 配置说明

### builderConfig.html.tags

`builderConfig.html.tags` 用于向 HTML `<head>` 中添加标签：

```typescript
builderConfig: {
  html: {
    tags: [
      {
        tag: 'meta',        // 标签名
        attrs: {            // 标签属性
          name: 'msvalidate.01',
          content: 'YOUR_CODE',
        },
      },
    ],
  },
},
```

### 支持的标签类型

除了 Meta 标签，还支持其他 HTML 标签：

```typescript
builderConfig: {
  html: {
    tags: [
      // Meta 标签
      {
        tag: 'meta',
        attrs: {
          name: 'description',
          content: '网站描述',
        },
      },
      // Link 标签
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          href: '/favicon.ico',
        },
      },
      // Script 标签
      {
        tag: 'script',
        attrs: {
          src: 'https://example.com/script.js',
          async: true,
        },
      },
    ],
  },
},
```

## 注意事项

1. **验证码保密**：验证码可以公开，不会影响网站安全
2. **验证有效期**：验证成功后，Meta 标签需要保留，Bing 会定期检查
3. **部署后验证**：必须等待部署完成后才能验证成功
4. **站点地图**：建议同时配置 Sitemap 插件，方便搜索引擎抓取

## 常见问题

### Q: 验证失败怎么办？

A: 检查以下几点：
1. 确认验证码是否正确复制
2. 确认配置文件是否正确保存
3. 确认是否已部署到线上
4. 清除浏览器缓存后重试

### Q: 需要多久才能看到数据？

A: 通常需要几天到几周时间，Bing 才会开始抓取和索引你的网站。

### Q: 可以使用其他验证方式吗？

A: 可以，Bing 支持多种验证方式：
- HTML Meta 标签（推荐）
- HTML 文件验证
- DNS 验证
- 从 Google Search Console 导入

## 参考文档

- [Bing Webmaster Tools 官网](https://www.bing.com/webmasters)
- [Rspress 配置文档](https://rspress.rs/zh/guide/basic-config)
