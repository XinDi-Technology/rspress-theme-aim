---
order: 2
---

# Blog Feature Usage Guide

Rspress Theme AIm provides complete blog functionality with article management, categories, tags, and multi-language support.

## Feature Highlights

- **Automatic List Generation**: Automatically display blog article list based on components
- **Markdown/MDX Support**: Write articles using standard Markdown or MDX format
- **Frontmatter Metadata**: Support for title, date, author, categories, tags and other metadata configuration
- **Multi-language Support**: Independent management of Chinese and English blogs
- **Article Navigation**: Automatically generate previous/next navigation
- **Responsive Design**: Adapts to various screen sizes

## Directory Structure

```
docs/
├── zh/                          # Chinese documentation
│   ├── blog/                    # Chinese blog
│   │   ├── index.mdx           # Blog homepage
│   │   ├── _meta.json         # Blog navigation config
│   │   └── *.mdx              # Blog articles
│   └── _nav.json              # Main navigation config
└── en/                          # English documentation
    ├── blog/                    # English blog
    │   ├── index.mdx
    │   ├── _meta.json
    │   └── *.mdx
    └── _nav.json
theme/
└── components/
    └── Blog/
        └── index.tsx           # Blog list component
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
sidebar: false
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
| `sidebar` | boolean | No | Whether to show sidebar, recommended to set to `false` for blog articles |

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
description: This is a technical article about Rspress
sidebar: false
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

## Blog Homepage Configuration

The `index.mdx` file is the blog homepage, need to import and use the blog list component:

```markdown
---
sidebar: false
---

import { BlogListAuto } from '@theme/components/Blog';

# Blog

Welcome to the Rspress Theme AIm blog page.

<BlogListAuto />
```

The `BlogListAuto` component will automatically:
- Get all blog articles for the current language
- Sort by date (newest first)
- Display article list with title, date, author, categories, tags and summary
- Support responsive design

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
  "blog",
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

**Note**: Chinese version link should be `/zh/blog`, English version link should be `/en/blog`.

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

- Blog homepage: `/blog/` (automatically redirects based on language)
- Chinese blog: `/blog/`
- English blog: `/en/blog/`
- Single article: `/blog/welcome` or `/zh/blog/welcome`

## Blog List Styles

The blog list component provides the following styles:

- **Article Card**: Borderless design, clean and beautiful
- **Category Tags**: Blue background, highlighted display
- **Tags**: Gray background, auxiliary classification
- **Responsive Layout**: Automatically adjusts on mobile devices

Style file location: `theme/styles/blog.css`

## Best Practices

1. **Keep Consistency**: Use unified frontmatter field naming
2. **Date Format**: Use `YYYY-MM-DD` format uniformly
3. **Categories and Tags**: Reasonably use categories and tags for easy article archiving
4. **SEO Optimization**: Add `description` field for important articles
5. **Sidebar Setting**: Blog articles recommended to set `sidebar: false`
6. **Image Management**: Place images in the `docs/public/` directory
7. **File Naming**: Use meaningful filenames for easy maintenance

## FAQ

### Q: Why doesn't the blog list display articles?

A: Please check:
1. Whether the file is in the `docs/zh/blog/` or `docs/en/blog/` directory
2. Whether frontmatter contains `title` and `date` fields
3. Whether the filename matches the reference in `_meta.json`

### Q: How to change the blog list sorting method?

A: Modify the sorting logic in `theme/components/Blog/index.tsx`:

```typescript
blogPosts.sort((a, b) => {
  // Currently sorted by date descending (newest first)
  if (!a.date && !b.date) return 0;
  if (!a.date) return 1;
  if (!b.date) return -1;
  return b.date.getTime() - a.date.getTime();
});
```

### Q: How to customize blog styles?

A: Edit the `theme/styles/blog.css` file, you can modify:
- Article card styles
- Category and tag styles
- Navigation styles
- Responsive layout

### Q: What Markdown syntax does blog articles support?

A: Rspress supports standard Markdown syntax, including:
- Headings, paragraphs, lists
- Code blocks (with syntax highlighting)
- Links, images
- Tables
- Quotes
- Task lists
- MDX components

## Extended Features

### Add More Metadata

You can add more fields in the `BlogItem` interface:

```typescript
export interface BlogItem {
  title?: string;
  description?: string;
  date?: Date;
  link?: string;
  authors?: string[];
  tags?: string[];
  categories?: string[];
  // Add custom fields
  readingTime?: number;
  featured?: boolean;
}
```

### Integrate Comment System

You can integrate third-party comment systems in blog articles, such as Giscus, Gitalk, etc.

### Add Search Functionality

You can integrate search plugins to provide blog article search functionality.

## Examples

### Complete Blog Article Example

View `docs/en/blog/welcome.mdx` and `docs/zh/blog/welcome.mdx` for complete examples.

### Blog Homepage Example

View `docs/en/blog/index.mdx` and `docs/zh/blog/index.mdx` for blog homepage configuration examples.

## Reference Resources

- Rspress Official Documentation: https://rspress.rs
- Rspress GitHub: https://github.com/web-infra-dev/rspress
- Blog List Component: `theme/components/Blog/index.tsx`
- Blog Styles: `theme/styles/blog.css`
