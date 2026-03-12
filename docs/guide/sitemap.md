# Sitemap 站点地图

本主题已集成 `@rspress/plugin-sitemap` 插件，自动生成用于 SEO 的站点地图（sitemap），有利于搜索引擎抓取。

## 功能说明

Sitemap 是一个 XML 文件，列出了网站的所有页面 URL，帮助搜索引擎更高效地抓取和索引网站内容。

## 配置说明

### 基础配置

在 `rspress.config.ts` 中配置：

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
  // ... 其他配置
});
```

### 配置选项

| 选项 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `siteUrl` | string | 是 | - | 部署访问的站点 URL，需包含 base 路径 |
| `customMaps` | object | 否 | {} | 为特定页面设置自定义 sitemap 值 |
| `defaultPriority` | string | 否 | '0.5' | 默认优先级（0.0-1.0） |
| `defaultChangeFreq` | string | 否 | 'monthly' | 默认更新频率 |

### 更新频率选项

`defaultChangeFreq` 支持以下值：

- `always`：每次访问都更新
- `hourly`：每小时更新
- `daily`：每天更新
- `weekly`：每周更新
- `monthly`：每月更新（默认）
- `yearly`：每年更新
- `never`：从不更新

### 优先级选项

`defaultPriority` 支持以下值：

`'0.0' | '0.1' | '0.2' | '0.3' | '0.4' | '0.5' | '0.6' | '0.7' | '0.8' | '0.9' | '1.0'`

- `1.0`：最高优先级（首页）
- `0.5`：默认优先级
- `0.0`：最低优先级

## 高级配置

### 自定义页面设置

为特定页面设置不同的优先级和更新频率：

```typescript
pluginSitemap({
  siteUrl: 'https://xindi-technology.github.io/rspress-theme-aim/',
  defaultPriority: '0.5',
  defaultChangeFreq: 'monthly',
  customMaps: {
    // 首页设置更高优先级
    '/': {
      loc: '/',
      priority: '1.0',
      changefreq: 'weekly',
    },
    // 指南页面
    '/guide/': {
      loc: '/guide/',
      priority: '0.8',
      changefreq: 'weekly',
    },
    // 文档页面
    '/guide/copyright': {
      loc: '/guide/copyright',
      priority: '0.7',
      changefreq: 'monthly',
    },
  },
}),
```

## 访问 Sitemap

构建完成后，可以通过以下地址访问 sitemap：

```
https://xindi-technology.github.io/rspress-theme-aim/sitemap.xml
```

## 提交到搜索引擎

### Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console/)
2. 添加网站属性
3. 左侧菜单选择"站点地图"
4. 输入 `sitemap.xml` 并提交

### Bing Webmaster Tools

1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 添加网站
3. 左侧菜单选择"站点地图"
4. 提交站点地图 URL：`https://xindi-technology.github.io/rspress-theme-aim/sitemap.xml`

### 百度站长平台

1. 访问 [百度站长平台](https://ziyuan.baidu.com/)
2. 添加网站
3. 选择"数据引入" → "链接提交" → "sitemap"
4. 提交站点地图地址

## 注意事项

1. **siteUrl 必须包含 base 路径**：如果配置了 `base: '/rspress-theme-aim/'`，则 `siteUrl` 必须为 `https://example.com/rspress-theme-aim/`

2. **自动更新**：每次构建时会自动生成最新的 sitemap.xml

3. **搜索引擎抓取**：提交 sitemap 后，搜索引擎会定期抓取更新

4. **优先级建议**：
   - 首页：1.0
   - 主要分类页：0.8
   - 内容页面：0.6-0.7
   - 其他页面：0.5

## 参考文档

- [Rspress Sitemap 插件文档](https://rspress.rs/zh/plugin/official-plugins/sitemap)
- [Sitemap 协议规范](https://www.sitemaps.org/protocol.html)
