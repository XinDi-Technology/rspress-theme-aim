---
order: 2
---

# 博客功能使用指南

Rspress Theme AIm 提供了完整的博客功能，支持文章管理、分类标签、多语言等特性。

## 功能特性

- **自动列表生成**：基于组件自动展示博客文章列表
- **Markdown/MDX 支持**：使用标准 Markdown 或 MDX 格式编写文章
- **Frontmatter 元数据**：支持标题、日期、作者、分类、标签等元数据配置
- **多语言支持**：中文和英文博客独立管理
- **文章导航**：自动生成上一篇/下一篇导航
- **响应式设计**：适配各种屏幕尺寸

## 目录结构

```
docs/
├── zh/                          # 中文文档
│   ├── blog/                    # 中文博客
│   │   ├── index.mdx           # 博客首页
│   │   ├── _meta.json         # 博客导航配置
│   │   └── *.mdx              # 博客文章
│   └── _nav.json              # 主导航配置
└── en/                          # 英文文档
    ├── blog/                    # 英文博客
    │   ├── index.mdx
    │   ├── _meta.json
    │   └── *.mdx
    └── _nav.json
theme/
└── components/
    └── Blog/
        └── index.tsx           # 博客列表组件
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
sidebar: false
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
| `description` | string | 是 | 文章摘要，在博客列表中显示 |
| `sidebar` | boolean | 否 | 是否显示侧边栏，博客文章建议设置为 `false` |

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
description: 这是一篇关于 Rspress 的技术文章
sidebar: false
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

![新地科技](https://cdn.zhangnianqiang.top/uploads/images/gallery/2026-03/wKqebScvKli74q7U-QjymrmD46M.png)
```

## 博客首页配置

`index.mdx` 文件是博客首页，需要导入并使用博客列表组件：

```markdown
---
sidebar: false
---

import { BlogListAuto } from '@theme/components/Blog';

# 博客

欢迎来到 Rspress Theme AIm 的博客页面。

<BlogListAuto />
```

`BlogListAuto` 组件会自动：
- 获取当前语言的所有博客文章
- 按日期排序（最新的在前）
- 显示文章列表，包含标题、日期、作者、分类、标签和摘要
- 支持响应式设计

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
  "blog",
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

**注意**：中文版链接应为 `/zh/blog`，英文版链接应为 `/en/blog`。

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

- 博客首页：`/blog/`（自动根据语言跳转）
- 中文博客：`/blog/`
- 英文博客：`/en/blog/`
- 单篇文章：`/blog/welcome` 或 `/zh/blog/welcome`

## 博客列表样式

博客列表组件提供了以下样式：

- **文章卡片**：无边框设计，简洁美观
- **分类标签**：蓝色背景，突出显示
- **标签**：灰色背景，辅助分类
- **响应式布局**：移动端自动调整

样式文件位置：`theme/styles/blog.css`

## 最佳实践

1. **保持一致性**：使用统一的 frontmatter 字段命名
2. **日期格式**：统一使用 `YYYY-MM-DD` 格式
3. **分类标签**：合理使用分类和标签，便于文章归档
4. **SEO 优化**：为重要文章添加 `description` 字段
5. **侧边栏设置**：博客文章建议设置 `sidebar: false`
6. **图片管理**：将图片放在 `docs/public/` 目录下
7. **文件命名**：使用有意义的文件名，便于维护

## 常见问题

### Q: 为什么博客列表不显示文章？

A: 请检查：
1. 文件是否在 `docs/zh/blog/` 或 `docs/en/blog/` 目录下
2. frontmatter 中是否包含 `title` 和 `date` 字段
3. 文件名是否与 `_meta.json` 中的引用一致

### Q: 如何修改博客列表的排序方式？

A: 修改 `theme/components/Blog/index.tsx` 中的排序逻辑：

```typescript
blogPosts.sort((a, b) => {
  // 当前是按日期降序（最新的在前）
  if (!a.date && !b.date) return 0;
  if (!a.date) return 1;
  if (!b.date) return -1;
  return b.date.getTime() - a.date.getTime();
});
```

### Q: 如何自定义博客样式？

A: 编辑 `theme/styles/blog.css` 文件，可以修改：
- 文章卡片样式
- 分类和标签样式
- 导航样式
- 响应式布局

### Q: 博客文章支持哪些 Markdown 语法？

A: Rspress 支持标准的 Markdown 语法，包括：
- 标题、段落、列表
- 代码块（支持语法高亮）
- 链接、图片
- 表格
- 引用
- 任务列表
- MDX 组件

## 扩展功能

### 添加更多元数据

可以在 `BlogItem` 接口中添加更多字段：

```typescript
export interface BlogItem {
  title?: string;
  description?: string;
  date?: Date;
  link?: string;
  authors?: string[];
  tags?: string[];
  categories?: string[];
  // 添加自定义字段
  readingTime?: number;
  featured?: boolean;
}
```

### 集成评论系统

可以在博客文章中集成第三方评论系统，如 Giscus、Gitalk 等。

### 添加搜索功能

可以集成搜索插件，提供博客文章搜索功能。

## 示例

### 完整的博客文章示例

查看 `docs/zh/blog/welcome.mdx` 和 `docs/en/blog/welcome.mdx` 获取完整示例。

### 博客首页示例

查看 `docs/zh/blog/index.mdx` 和 `docs/en/blog/index.mdx` 获取博客首页配置示例。

## 参考资源

- Rspress 官方文档：https://rspress.rs
- Rspress GitHub：https://github.com/web-infra-dev/rspress
- 博客列表组件：`theme/components/Blog/index.tsx`
- 博客样式：`theme/styles/blog.css`
