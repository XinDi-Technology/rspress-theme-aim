# 博客功能使用指南

Rspress Theme AIm 基于 Rspress 的约定式路由系统实现了博客功能。

## 功能特性

- **约定式路由**：基于文件系统自动生成路由
- **Markdown/MDX 支持**：使用标准 Markdown 或 MDX 格式编写文章
- **Frontmatter 元数据**：支持标题、日期、作者、分类、标签等元数据配置
- **多语言支持**：中文和英文博客独立管理
- **侧边栏导航**：自动生成博客文章的侧边栏导航

## 目录结构

```
docs/
├── zh/                          # 中文文档
│   ├── blog/                    # 中文博客
│   │   ├── index.mdx           # 博客首页
│   │   ├── _meta.json         # 博客导航配置
│   │   └── welcome.mdx        # 博客文章
│   └── _nav.json              # 主导航配置
└── en/                          # 英文文档
    ├── blog/                    # 英文博客
    │   ├── index.mdx
    │   ├── _meta.json
    │   └── welcome.mdx
    └── _nav.json
```

## 创建博客文章

### 1. 创建 MDX 文件

在 `docs/zh/blog/` 或 `docs/en/blog/` 目录下创建 `.mdx` 文件。

### 2. 配置 Frontmatter

在文件开头添加 YAML frontmatter 配置：

```yaml
---
title: 文章标题
date: 2026-03-17
author: 作者名称
categories:
  - 分类1
  - 分类2
tags:
  - 标签1
  - 标签2
description: 文章摘要
---
```

### Frontmatter 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | string | 是 | 文章标题 |
| `date` | string | 是 | 发布日期，格式：YYYY-MM-DD |
| `author` | string | 否 | 作者名称 |
| `categories` | string[] | 否 | 文章分类列表 |
| `tags` | string[] | 否 | 文章标签列表 |
| `description` | string | 否 | 文章摘要，用于 SEO |

### 3. 编写文章内容

在 frontmatter 之后使用 Markdown 语法编写文章内容：

```markdown
---
title: 我的博客文章
date: 2026-03-17
author: AIm Team
categories:
  - 技术
tags:
  - Rspress
---

# 文章标题

这里是文章正文内容...

## 子标题

支持标准 Markdown 语法：

- **粗体**
- *斜体*
- `代码`

### 代码块

```javascript
function hello() {
  console.log('Hello, Rspress!');
}
```

### 链接和图片

[Rspress 官网](https://rspress.rs)

![图片描述](/images/example.png)
```

## 配置博客导航

### _meta.json 配置

`_meta.json` 文件用于配置博客文章的侧边栏导航结构：

```json
[
  {
    "type": "section-header",
    "label": "总览"
  },
  "index",
  {
    "type": "section-header",
    "label": "博客"
  },
  "welcome",
  "another-post"
]
```

### 配置说明

- `section-header`：创建分区标题
- 字符串值：对应 `.mdx` 文件名（不含扩展名）
- 顺序：按数组中的顺序显示导航项

## 更新主导航

在 `_nav.json` 中添加博客入口：

```json
[
  {
    "text": "指南",
    "items": [
      // ... 其他导航项
    ]
  },
  {
    "text": "博客",
    "link": "/blog"
  }
]
```

## 博客首页

`index.mdx` 文件是博客首页，可以包含：

- 博客介绍
- 最新文章列表
- 博客使用说明

示例内容：

```markdown
---
sidebar: false
---

# 博客

欢迎来到 Rspress Theme AIm 的博客页面。

## 最新文章

这里是博客文章的介绍和链接...

## 如何使用

详细的使用说明...
```

## 文件命名规范

- 使用小写字母、数字和连字符
- 避免使用空格和特殊字符
- 推荐格式：`YYYY-MM-DD-title.mdx`（如 `2026-03-17-welcome.mdx`）

## MDX 功能

Rspress 支持 MDX，你可以在 Markdown 中使用 React 组件：

```markdown
---
title: 使用 MDX 组件
---

import { Alert } from '@theme/components/Alert';

<Alert type="info">
这是一个信息提示框
</Alert>
```

## 访问博客

- 博客首页：`/blog/`
- 单篇文章：`/blog/welcome`（文件名为 `welcome.mdx`）

## 最佳实践

1. **保持一致性**：使用统一的 frontmatter 字段命名
2. **日期格式**：统一使用 `YYYY-MM-DD` 格式
3. **分类标签**：合理使用分类和标签，便于文章归档
4. **SEO 优化**：为重要文章添加 `description` 字段
5. **图片管理**：将图片放在 `docs/public/` 目录下

## 与官方对比

与 Rspress 官方博客实现保持一致：

- ✅ 使用约定式路由
- ✅ 使用 `.mdx` 文件格式
- ✅ 使用 frontmatter 配置元数据
- ✅ 使用 `_meta.json` 配置导航
- ✅ 支持多语言

## 下一步

- 查看示例文章：`docs/zh/blog/welcome.mdx`
- 参考官方实现：https://github.com/web-infra-dev/rspress/tree/main/website/docs/zh/blog
- 阅读 Rspress 文档：https://rspress.rs
