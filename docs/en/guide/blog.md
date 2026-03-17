# Blog Usage Guide

Rspress Theme AIm implements blog functionality based on Rspress's convention-based routing system.

## Features

- **Convention-based Routing**: Automatically generate routes based on file system
- **Markdown/MDX Support**: Write articles using standard Markdown or MDX format
- **Frontmatter Metadata**: Support for title, date, author, categories, tags, etc.
- **Multi-language Support**: Independent management for Chinese and English blogs
- **Sidebar Navigation**: Automatically generate sidebar navigation for blog posts

## Directory Structure

```
docs/
├── zh/                          # Chinese Documentation
│   ├── blog/                    # Chinese Blog
│   │   ├── index.mdx           # Blog Homepage
│   │   ├── _meta.json         # Blog Navigation Config
│   │   └── welcome.mdx        # Blog Post
│   └── _nav.json              # Main Navigation Config
└── en/                          # English Documentation
    ├── blog/                    # English Blog
    │   ├── index.mdx
    │   ├── _meta.json
    │   └── welcome.mdx
    └── _nav.json
```

## Creating Blog Posts

### 1. Create MDX File

Create a `.mdx` file in the `docs/zh/blog/` or `docs/en/blog/` directory.

### 2. Configure Frontmatter

Add YAML frontmatter at the beginning of the file:

```yaml
---
title: Article Title
date: 2026-03-17
author: Author Name
categories:
  - Category 1
  - Category 2
tags:
  - Tag 1
  - Tag 2
description: Article summary
---
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Article title |
| `date` | string | Yes | Publication date, format: YYYY-MM-DD |
| `author` | string | No | Author name |
| `categories` | string[] | No | Article category list |
| `tags` | string[] | No | Article tag list |
| `description` | string | No | Article summary for SEO |

### 3. Write Article Content

Use Markdown syntax after the frontmatter:

```markdown
---
title: My Blog Post
date: 2026-03-17
author: AIm Team
categories:
  - Technology
tags:
  - Rspress
---

# Article Title

This is the article content...

## Subheading

Supports standard Markdown syntax:

- **Bold**
- *Italic*
- `code`

### Code Block

```javascript
function hello() {
  console.log('Hello, Rspress!');
}
```

### Links and Images

[Rspress Official Website](https://rspress.rs)

![Image Description](/images/example.png)
```

## Configure Blog Navigation

### _meta.json Configuration

The `_meta.json` file configures the sidebar navigation structure for blog posts:

```json
[
  {
    "type": "section-header",
    "label": "Overview"
  },
  "index",
  {
    "type": "section-header",
    "label": "Blog"
  },
  "welcome",
  "another-post"
]
```

### Configuration Explanation

- `section-header`: Creates a section header
- String value: Corresponds to `.mdx` filename (without extension)
- Order: Display navigation items in the order they appear in the array

## Update Main Navigation

Add blog entry in `_nav.json`:

```json
[
  {
    "text": "Guide",
    "items": [
      // ... other navigation items
    ]
  },
  {
    "text": "Blog",
    "link": "/blog"
  }
]
```

## Blog Homepage

The `index.mdx` file is the blog homepage and can contain:

- Blog introduction
- Latest articles list
- Blog usage instructions

Example content:

```markdown
---
sidebar: false
---

# Blog

Welcome to the Rspress Theme AIm blog page.

## Latest Articles

Here is the introduction and links to blog articles...

## How to Use

Detailed usage instructions...
```

## File Naming Conventions

- Use lowercase letters, numbers, and hyphens
- Avoid spaces and special characters
- Recommended format: `YYYY-MM-DD-title.mdx` (e.g., `2026-03-17-welcome.mdx`)

## MDX Features

Rspress supports MDX, allowing you to use React components in Markdown:

```markdown
---
title: Using MDX Components
---

import { Alert } from '@theme/components/Alert';

<Alert type="info">
This is an info alert box
</Alert>
```

## Accessing the Blog

- Blog homepage: `/blog/`
- Individual article: `/blog/welcome` (filename is `welcome.mdx`)

## Best Practices

1. **Consistency**: Use consistent field naming in frontmatter
2. **Date Format**: Uniformly use `YYYY-MM-DD` format
3. **Categories and Tags**: Reasonably use categories and tags for archiving
4. **SEO Optimization**: Add `description` field for important articles
5. **Image Management**: Place images in the `docs/public/` directory

## Comparison with Official

Consistent with Rspress official blog implementation:

- ✅ Convention-based routing
- ✅ Uses `.mdx` file format
- ✅ Frontmatter for metadata configuration
- ✅ Uses `_meta.json` for navigation configuration
- ✅ Multi-language support

## Next Steps

- View example article: `docs/en/blog/welcome.mdx`
- Reference official implementation: https://github.com/web-infra-dev/rspress/tree/main/website/docs/en/blog
- Read Rspress documentation: https://rspress.rs
