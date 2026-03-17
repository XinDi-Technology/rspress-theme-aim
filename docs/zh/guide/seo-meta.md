# SEO 优化标签

本主题支持通过 Meta 标签优化搜索引擎排名，提高网站在搜索结果中的可见性。

## 功能说明

SEO（Search Engine Optimization）优化标签帮助搜索引擎更好地理解和索引你的网站，从而提高搜索排名。

## 配置说明

### 基础配置

在 `rspress.config.ts` 中配置 SEO 标签：

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
        // SEO 优化标签
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content: '零本地环境 · GitHub Pages 一键部署的 Rspress 文档站模板',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: 'Rspress, 文档站, GitHub Pages, ICP备案',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'XinDi Technology',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index, follow',
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

## 标签说明

### 1. Description（网站描述）

```typescript
{
  tag: 'meta',
  attrs: {
    name: 'description',
    content: '零本地环境 · GitHub Pages 一键部署的 Rspress 文档站模板',
  },
}
```

**作用**：
- 在搜索结果中显示网站描述
- 帮助用户了解网站内容
- 提高点击率（CTR）

**显示效果**：
```
人工智能制造 · Rspress Theme AIm
https://xindi-technology.github.io/rspress-theme-aim/
零本地环境 · GitHub Pages 一键部署的 Rspress 文档站模板  ← description
```

**建议**：
- 长度：120-160 个字符
- 包含核心关键词
- 描述清晰、吸引人

### 2. Keywords（关键词）

```typescript
{
  tag: 'meta',
  attrs: {
    name: 'keywords',
    content: 'Rspress, 文档站, GitHub Pages, ICP备案, 公安备案',
  },
}
```

**作用**：
- 告诉搜索引擎网站的关键词
- 帮助分类和索引

**注意**：
- 现代搜索引擎（如 Google）已不再重视此标签
- 百度等中文搜索引擎仍会参考
- 建议保留，但不要过度依赖

**建议**：
- 5-10 个关键词
- 用逗号分隔
- 包含核心业务关键词

### 3. Author（作者）

```typescript
{
  tag: 'meta',
  attrs: {
    name: 'author',
    content: 'XinDi Technology',
  },
}
```

**作用**：
- 标识网站作者或组织
- 增加可信度

### 4. Robots（爬虫指令）

```typescript
{
  tag: 'meta',
  attrs: {
    name: 'robots',
    content: 'index, follow',
  },
}
```

**作用**：控制搜索引擎爬虫行为

**常用值**：
- `index`：允许索引页面（默认）
- `noindex`：禁止索引页面
- `follow`：跟踪页面中的链接（默认）
- `nofollow`：不跟踪页面中的链接

**组合示例**：
- `index, follow`：允许索引并跟踪链接（推荐）
- `noindex, nofollow`：禁止索引和跟踪
- `noindex, follow`：禁止索引但跟踪链接

## 高级配置

### 完整 SEO 配置示例

```typescript
builderConfig: {
  html: {
    tags: [
      // Bing Webmasters 验证
      {
        tag: 'meta',
        attrs: {
          name: 'msvalidate.01',
          content: 'YOUR_BING_CODE',
        },
      },
      
      // SEO 优化标签
      {
        tag: 'meta',
        attrs: {
          name: 'description',
          content: '零本地环境 · GitHub Pages 一键部署的 Rspress 文档站模板，支持版权信息、ICP备案、公安备案等功能',
        },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'keywords',
          content: 'Rspress, 文档站, GitHub Pages, ICP备案, 公安备案, 静态站点, 零本地环境',
        },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'author',
          content: 'XinDi Technology',
        },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'robots',
          content: 'index, follow',
        },
      },
    ],
  },
},
```

### 针对特定搜索引擎

可以为不同搜索引擎设置不同的 robots 指令：

```typescript
// Google
{
  tag: 'meta',
  attrs: {
    name: 'googlebot',
    content: 'index, follow',
  },
},

// Bing
{
  tag: 'meta',
  attrs: {
    name: 'bingbot',
    content: 'index, follow',
  },
},

// 百度
{
  tag: 'meta',
  attrs: {
    name: 'baiduspider',
    content: 'index, follow',
  },
},
```

## SEO 最佳实践

### 1. Description 编写建议

✅ **好的示例**：
```
零本地环境 · GitHub Pages 一键部署的 Rspress 文档站模板，支持版权信息、ICP备案、公安备案等功能
```
- 长度适中（约 60 个字符）
- 包含核心关键词
- 描述清晰

❌ **不好的示例**：
```
这是一个网站
```
- 过于简短
- 没有关键词
- 描述不清晰

### 2. Keywords 编写建议

✅ **好的示例**：
```
Rspress, 文档站, GitHub Pages, ICP备案, 公安备案
```
- 相关性强
- 数量适中
- 用逗号分隔

❌ **不好的示例**：
```
Rspress,文档站,GitHub Pages,ICP备案,公安备案,静态站点,零本地环境,模板,主题,开源,免费,简单,快速,高效,现代化,React,MDX,全文搜索
```
- 关键词过多
- 部分关键词不相关

### 3. 配合其他 SEO 功能

建议同时配置：
- **Sitemap**：帮助搜索引擎发现所有页面
- **Bing Webmasters**：监控搜索表现
- **语义化 HTML**：使用正确的标题层级（H1-H6）
- **友好的 URL**：使用有意义的路径名称

## 验证 SEO 效果

### 1. 搜索结果预览

在 Google 搜索框输入：
```
site:xindi-technology.github.io/rspress-theme-aim/
```

### 2. SEO 检测工具

- [Google Search Console](https://search.google.com/search-console/)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [百度站长平台](https://ziyuan.baidu.com/)

### 3. 在线检测

- [SEO Site Checkup](https://seositecheckup.com/)
- [Meta Tag Analyzer](https://www.seoptimer.com/meta-tag-analyzer)

## 注意事项

1. **Description 长度**：建议 120-160 个字符，过长会被截断
2. **Keywords 数量**：建议 5-10 个，过多会被视为关键词堆砌
3. **内容真实性**：描述和关键词应与网站内容相符
4. **定期更新**：根据网站内容变化及时更新 SEO 标签

## 参考文档

- [Google SEO 指南](https://developers.google.com/search/docs)
- [百度 SEO 优化指南](https://ziyuan.baidu.com/college/documentinfo?id=2729)
- [Rspress 配置文档](https://rspress.rs/zh/guide/basic-config)
