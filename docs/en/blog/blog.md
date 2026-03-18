---
title: New Blog Test
date: 2026-03-17
author: AIm Team
categories:
  - Announcement
  - Tutorial
tags:
  - Rspress
  - Theme
  - Blog
description: This is a new blog post, a test based on MD files.
sidebar: false
---

# Blog Feature Usage Guide

Rspress Theme AIm implements blog functionality based on Rspress's conventional routing system.

## Feature Highlights

- **Conventional Routing**: Automatically generate routes based on file system
- **Markdown/MDX Support**: Write articles using standard Markdown or MDX format
- **Frontmatter Metadata**: Support for title, date, author, categories, tags and other metadata configuration
- **Multi-language Support**: Independent management of Chinese and English blogs
- **Sidebar Navigation**: Automatically generate sidebar navigation for blog articles

## Directory Structure

```
docs/
├── zh/                          # Chinese documentation
│   ├── blog/                    # Chinese blog
│   │   ├── index.mdx           # Blog homepage
│   │   ├── _meta.json         # Blog navigation config
│   │   └── welcome.mdx        # Blog article
│   └── _nav.json              # Main navigation config
└── en/                          # English documentation
    ├── blog/                    # English blog
    │   ├── index.mdx
    │   ├── _meta.json
    │   └── welcome.mdx
    └── _nav.json
```

## Creating Blog Posts

### 1. Create MDX File

Create a `.mdx` file in the `docs/zh/blog/` or `docs/en/blog/` directory.

### 2. Configure Frontmatter

Add YAML frontmatter configuration at the beginning of the file:

```yaml
---
title: Article Title
date: 2026-03-17
author: Author Name
categories:
  - Category1
  - Category2
tags:
  - Tag1
  - Tag2
description: Article summary
---
```

### Frontmatter Field Description

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Article title |
| `date` | string | Yes | Publish date, format: YYYY-MM-DD |
| `author` | string | No | Author name |
| `categories` | string[] | No | Article category list |
| `tags` | string[] | No | Article tag list |
| `description` | string | Yes | Article summary, displayed in blog list |

### 3. Write Article Content

Use Markdown syntax to write article content after the frontmatter:

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

This is the main content of the article...

## Subtitle

Supports standard Markdown syntax:

- **Bold**
- *Italic*
- `Code`

### Code Blocks

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

The `_meta.json` file is used to configure the sidebar navigation structure of blog articles:

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

### Configuration Description

- `section-header`: Create section header
- String value: Corresponds to `.mdx` filename (without extension)
- Order: Display navigation items in the order of the array

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

The `index.mdx` file is the blog homepage, which can include:

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

Rspress supports MDX, you can use React components in Markdown:

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
- Single article: `/blog/welcome` (filename is `welcome.mdx`)

## Best Practices

1. **Keep Consistency**: Use unified frontmatter field naming
2. **Date Format**: Use `YYYY-MM-DD` format uniformly
3. **Categories and Tags**: Reasonably use categories and tags for easy article archiving
4. **SEO Optimization**: Add `description` field for important articles
5. **Image Management**: Place images in the `docs/public/` directory

## Comparison with Official

Consistent with Rspress official blog implementation:

- ✅ Use conventional routing
- ✅ Use `.mdx` file format
- ✅ Use frontmatter to configure metadata
- ✅ Use `_meta.json` to configure navigation
- ✅ Support multiple languages

## Next Steps

- View example article: `docs/en/blog/welcome.mdx`
- Refer to official implementation: https://github.com/web-infra-dev/rspress/tree/main/website/docs/en/blog
- Read Rspress documentation: https://rspress.rs
