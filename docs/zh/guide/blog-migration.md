# Rspress Theme AIm 博客功能重构说明

## 概述

本次更新参考了 Rspress 官方博客实现方式（https://github.com/web-infra-dev/rspress/tree/main/website/docs/zh/blog），重新实现了博客功能。

## 主要变化

### 之前实现（自定义组件方式）

```typescript
// theme/components/Blog/index.tsx
import { usePageData } from '@rspress/core/runtime';

export function BlogList() {
  const { siteData } = usePageData();
  // 自定义逻辑获取博客文章
  // ...
}
```

**存在的问题：**
- 需要自定义组件实现博客列表
- 需要手动管理博客文章数据
- 与 Rspress 官方实现方式不一致
- 维护成本高

### 新实现（约定式路由方式）

```markdown
---
sidebar: false
---

# 博客

欢迎来到 Rspress Theme AIm 的博客页面...
```

**优势：**
- ✅ 基于 Rspress 原生约定式路由
- ✅ 无需自定义组件
- ✅ 与官方实现方式一致
- ✅ 更易维护和扩展
- ✅ 支持多语言

## 实现细节

### 1. 目录结构

```
docs/
├── zh/
│   └── blog/
│       ├── index.mdx          # 博客首页
│       ├── _meta.json        # 导航配置
│       └── welcome.mdx       # 博客文章
└── en/
    └── blog/
        ├── index.mdx
        ├── _meta.json
        └── welcome.mdx
```

### 2. 文件格式

#### 博客首页 (index.mdx)

```markdown
---
sidebar: false
---

# 博客

欢迎来到 Rspress Theme AIm 的博客页面...
```

#### 博客文章 (welcome.mdx)

```markdown
---
title: 欢迎使用 Rspress 主题 AIm
date: 2026-03-17
author: AIm 团队
categories:
  - 公告
  - 教程
tags:
  - Rspress
  - 主题
  - 博客
---

文章内容...
```

#### 导航配置 (_meta.json)

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
  "welcome"
]
```

### 3. Frontmatter 字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | string | 是 | 文章标题 |
| `date` | string | 是 | 发布日期，格式：YYYY-MM-DD |
| `author` | string | 否 | 作者名称 |
| `categories` | string[] | 否 | 文章分类列表 |
| `tags` | string[] | 否 | 文章标签列表 |
| `description` | string | 否 | 文章摘要，用于 SEO |

## 已删除的文件

以下文件已不再需要，已被删除：

- `theme/components/Blog/index.tsx` - 自定义博客列表组件
- `theme/styles/blog.css` - 自定义博客样式
- `theme/components/Blog/` - 博客组件目录

## 新增的文件

以下文件是新增加的：

- `docs/zh/guide/blog.md` - 博客功能使用指南（中文）
- `docs/en/guide/blog.md` - 博客功能使用指南（英文）

## 使用示例

### 创建新博客文章

1. 在 `docs/zh/blog/` 或 `docs/en/blog/` 目录下创建 `.mdx` 文件
2. 添加 frontmatter 元数据
3. 编写文章内容
4. 在 `_meta.json` 中添加文章引用

### 示例文章

```markdown
---
title: 如何使用 Rspress 搭建博客
date: 2026-03-18
author: 示例作者
categories:
  - 教程
tags:
  - Rspress
  - 博客
  - 教程
---

# 如何使用 Rspress 搭建博客

Rspress 提供了简单易用的博客功能...

## 创建文章

在 `docs/blog/` 目录下创建 `.mdx` 文件...

## 配置元数据

使用 frontmatter 配置文章信息...
```

## 路由访问

- 博客首页：`/blog/`
- 单篇文章：`/blog/welcome`（对应 `welcome.mdx`）

## 参考资源

- Rspress 官方博客实现：https://github.com/web-infra-dev/rspress/tree/main/website/docs/zh/blog
- Rspress 官方文档：https://rspress.rs
- 博客功能使用指南：[docs/guide/blog.md](./blog.md)

## 迁移指南

如果你之前使用了旧的博客实现，可以按以下步骤迁移：

### 1. 备份现有博客文章

备份 `docs/zh/blog/` 和 `docs/en/blog/` 目录下的所有文章文件。

### 2. 更新文章格式

将博客文章的 frontmatter 调整为新格式：

**旧格式：**
```yaml
---
title: 标题
sidebar: false
categories: [...]
tags: [...]
---
```

**新格式：**
```yaml
---
title: 标题
date: 2026-03-17
author: 作者
categories: [...]
tags: [...]
---
```

主要变化：
- ✅ 添加 `date` 字段（必填）
- ✅ 添加 `author` 字段（可选）
- ❌ 移除 `sidebar: false`（在 _meta.json 中配置）

### 3. 配置 _meta.json

如果之前没有 `_meta.json` 文件，需要创建：

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
  "article-1",
  "article-2"
]
```

### 4. 更新博客首页

更新 `index.mdx`，移除对自定义组件的引用：

**旧格式：**
```markdown
import { BlogList } from '@theme/components/Blog';

<BlogList />
```

**新格式：**
```markdown
---
sidebar: false
---

# 博客

博客介绍内容...
```

### 5. 更新主题配置

从 `theme/index.tsx` 中移除博客样式引用：

```typescript
// 移除这一行
import './styles/blog.css';
```

## 总结

新的博客实现方式具有以下优势：

1. **更简单**：无需自定义组件，开箱即用
2. **更标准**：与 Rspress 官方实现方式一致
3. **更易维护**：遵循官方约定式路由规范
4. **更易扩展**：可以方便地集成 Rspress 插件生态
5. **更好的文档**：提供了详细的使用指南

如需进一步了解博客功能，请参考 [博客功能使用指南](./blog.md)。
