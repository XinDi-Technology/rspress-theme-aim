# 首页功能配置

本主题基于 Rspress V2 的 HomeFeature 组件，支持灵活配置首页功能展示区域。

## 基础配置

在 `docs/index.md` 文件的 frontmatter 中配置 `features`：

```yaml
---
pageType: home

features:
  - title: 功能标题
    details: 功能描述详情
    icon: 🚀
  - title: 另一个功能
    details: 另一个功能描述
    icon: 📦
---
```

## Feature 属性

每个 feature 支持以下属性：

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | string | 是 | 功能标题 |
| `details` | string | 是 | 功能详情描述，支持 HTML 字符串 |
| `icon` | string | 是 | 功能图标，支持多种格式 |
| `span` | 2 \| 3 \| 4 \| 6 | 否 | 网格列跨度，默认为 4 |
| `link` | string | 否 | 点击卡片跳转的链接 |

## 图标格式

`icon` 属性支持以下格式：

- **Emoji**: `'🚀'`
- **HTML 字符串**: `'<span class="icon">...</span>'`
- **SVG 字符串**: `'<svg>...</svg>'`
- **图片 URL**: `'/icons/feature.svg'` 或 `'https://example.com/icon.png'`

## 布局控制（span 属性）

Rspress 使用 **12 列网格系统**，通过 `span` 属性控制每个 feature 占据的列数：

| span 值 | 每行显示数量 | 适用场景 |
|---------|-------------|---------|
| 6 | 2 个 | 重点功能，需要更大展示空间 |
| 4 | 3 个 | 默认设置，平衡展示 |
| 3 | 4 个 | 功能较多，紧凑展示 |
| 2 | 6 个 | 大量功能，极简展示 |

### 示例：每行显示 2 个功能

```yaml
features:
  - title: 零本地环境
    details: 完全通过 GitHub 网页 + GitHub Actions 完成搭建与部署。
    icon: 🏃🏻‍♀️
    span: 6
  
  - title: 基于 Rspress V2
    details: 享受高性能构建、MDX 支持、全文搜索等现代能力。
    icon: 📦
    span: 6
  
  - title: GitHub Pages 自动部署
    details: 每次提交自动构建并发布。
    icon: 🎨
    span: 6
```

### 示例：每行显示 4 个功能

```yaml
features:
  - title: 零本地环境
    details: 完全通过 GitHub 网页 + GitHub Actions 完成搭建与部署。
    icon: 🏃🏻‍♀️
    span: 3
  
  - title: 基于 Rspress V2
    details: 享受高性能构建、MDX 支持、全文搜索等现代能力。
    icon: 📦
    span: 3
  
  - title: GitHub Pages 自动部署
    details: 每次提交自动构建并发布。
    icon: 🎨
    span: 3
  
  - title: 可扩展
    details: 后续可按需接入自定义主题、CSS 变量和插件生态。
    icon: 🌍
    span: 3
```

### 示例：混合布局

可以为不同功能设置不同的 span 值，创建不对称布局：

```yaml
features:
  - title: 快速开始
    details: 5 分钟搭建你的文档站点，无需本地环境。
    icon: 🚀
    span: 6  # 占半行，更突出
  
  - title: 基于 Rspress V2
    details: 享受高性能构建。
    icon: 📦
    span: 3
  
  - title: 自动部署
    details: 每次提交自动构建。
    icon: 🎨
    span: 3
```

## 链接功能（link 属性）

添加 `link` 属性可以让 feature 卡片变成可点击的链接：

### 内部链接

```yaml
features:
  - title: 快速开始
    details: 5 分钟搭建你的文档站点。
    icon: 🚀
    link: /guide/getting-started/  # 内部页面链接
  
  - title: 功能文档
    details: 查看所有功能配置说明。
    icon: 📖
    link: /guide/  # 链接到指南首页
```

### 外部链接

```yaml
features:
  - title: 查看 GitHub 仓库
    details: 访问我们的开源代码仓库，欢迎 Star 和 Fork。
    icon: ⭐
    link: https://github.com/XinDi-Technology/rspress-theme-aim
  
  - title: Rspress 官方文档
    details: 了解更多 Rspress 的功能和配置。
    icon: 📚
    link: https://rspress.rs
```

### 链接格式建议

- **目录/分类页面**：建议加斜杠，如 `/guide/`、`/guide/getting-started/`
- **具体文档页面**：可不加斜杠，如 `/guide/copyright` 或 `/guide/copyright.md`
- **外部链接**：保持原样，如 `https://github.com/...`

## 完整示例

```yaml
---
pageType: home

hero:
  name: 人工智能制造 · Rspress Theme AIm
  text: 零本地环境 · GitHub Pages 一键部署的 Rspress 文档站模板
  tagline: 只用浏览器就能搭建和维护的现代文档站
  actions:
    - theme: brand
      text: 指南
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/XinDi-Technology/rspress-theme-aim

features:
  - title: 快速开始
    details: 5 分钟搭建你的文档站点，无需本地环境。
    icon: 🚀
    span: 6
    link: /guide/getting-started/
  
  - title: 功能文档
    details: 查看所有功能配置说明。
    icon: 📖
    span: 6
    link: /guide/
  
  - title: 基于 Rspress V2
    details: 享受高性能构建、MDX 支持、全文搜索等现代能力。
    icon: 📦
    span: 4
  
  - title: GitHub Pages 自动部署
    details: 每次提交自动构建并发布。
    icon: 🎨
    span: 4
  
  - title: 查看源码
    details: 访问 GitHub 仓库获取完整代码。
    icon: 💻
    span: 4
    link: https://github.com/XinDi-Technology/rspress-theme-aim
---
```

## 响应式布局

Rspress 会自动处理响应式布局：

- **桌面端**（> 960px）：按照 `span` 属性显示
- **平板端**（≤ 960px）：自动调整为 2 列
- **手机端**（≤ 640px）：自动调整为 1 列

无需额外配置，系统会自动适配不同屏幕尺寸。

## 参考文档

- [Rspress HomeFeature 组件文档](https://rspress.rs/zh/ui/layout-components/home-feature)
