# Rspress Theme AIm Blog Feature Refactoring Guide

## Overview

This update references Rspress's official blog implementation (https://github.com/web-infra-dev/rspress/tree/main/website/docs/en/blog) and reimplements the blog functionality.

## Major Changes

### Previous Implementation (Custom Component Approach)

```typescript
// theme/components/Blog/index.tsx
import { usePageData } from '@rspress/core/runtime';

export function BlogList() {
  const { siteData } = usePageData();
  // Custom logic to get blog posts
  // ...
}
```

**Existing Issues:**
- Required custom components to implement blog list
- Required manual management of blog post data
- Inconsistent with Rspress official implementation
- High maintenance cost

### New Implementation (Conventional Routing Approach)

```markdown
---
sidebar: false
---

# Blog

Welcome to the Rspress Theme AIm blog page...
```

**Advantages:**
- ✅ Based on Rspress's native conventional routing
- ✅ No custom components required
- ✅ Consistent with official implementation
- ✅ Easier to maintain and extend
- ✅ Supports multiple languages

## Implementation Details

### 1. Directory Structure

```
docs/
├── zh/
│   └── blog/
│       ├── index.mdx          # Blog homepage
│       ├── _meta.json        # Navigation config
│       └── welcome.mdx       # Blog article
└── en/
    └── blog/
        ├── index.mdx
        ├── _meta.json
        └── welcome.mdx
```

### 2. File Formats

#### Blog Homepage (index.mdx)

```markdown
---
sidebar: false
---

# Blog

Welcome to the Rspress Theme AIm blog page...
```

#### Blog Article (welcome.mdx)

```markdown
---
title: Welcome to Rspress Theme AIm
date: 2026-03-17
author: AIm Team
categories:
  - Announcement
  - Tutorial
tags:
  - Rspress
  - Theme
  - Blog
---

Article content...
```

#### Navigation Configuration (_meta.json)

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
  "welcome"
]
```

### 3. Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Article title |
| `date` | string | Yes | Publish date, format: YYYY-MM-DD |
| `author` | string | No | Author name |
| `categories` | string[] | No | Article category list |
| `tags` | string[] | No | Article tag list |
| `description` | string | No | Article summary, used for SEO |

## Deleted Files

The following files are no longer needed and have been deleted:

- `theme/components/Blog/index.tsx` - Custom blog list component
- `theme/styles/blog.css` - Custom blog styles
- `theme/components/Blog/` - Blog component directory

## Added Files

The following files are newly added:

- `docs/zh/guide/blog.md` - Blog feature usage guide (Chinese)
- `docs/en/guide/blog.md` - Blog feature usage guide (English)

## Usage Examples

### Creating a New Blog Post

1. Create a `.mdx` file in `docs/zh/blog/` or `docs/en/blog/` directory
2. Add frontmatter metadata
3. Write article content
4. Add article reference in `_meta.json`

### Example Article

```markdown
---
title: How to Build a Blog with Rspress
date: 2026-03-18
author: Example Author
categories:
  - Tutorial
tags:
  - Rspress
  - Blog
  - Tutorial
---

# How to Build a Blog with Rspress

Rspress provides an easy-to-use blog feature...

## Creating Articles

Create `.mdx` files in the `docs/blog/` directory...

## Configuring Metadata

Use frontmatter to configure article information...
```

## Route Access

- Blog homepage: `/blog/`
- Single article: `/blog/welcome` (corresponds to `welcome.mdx`)

## Reference Resources

- Rspress official blog implementation: https://github.com/web-infra-dev/rspress/tree/main/website/docs/en/blog
- Rspress official documentation: https://rspress.rs
- Blog feature usage guide: [docs/guide/blog.md](./blog.md)

## Migration Guide

If you previously used the old blog implementation, you can migrate following these steps:

### 1. Backup Existing Blog Posts

Backup all article files in the `docs/zh/blog/` and `docs/en/blog/` directories.

### 2. Update Article Format

Adjust the frontmatter of blog posts to the new format:

**Old Format:**
```yaml
---
title: Title
sidebar: false
categories: [...]
tags: [...]
---
```

**New Format:**
```yaml
---
title: Title
date: 2026-03-17
author: Author
categories: [...]
tags: [...]
---
```

Main changes:
- ✅ Add `date` field (required)
- ✅ Add `author` field (optional)
- ❌ Remove `sidebar: false` (configure in _meta.json)

### 3. Configure _meta.json

If there was no `_meta.json` file before, create one:

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
  "article-1",
  "article-2"
]
```

### 4. Update Blog Homepage

Update `index.mdx`, remove references to custom components:

**Old Format:**
```markdown
import { BlogList } from '@theme/components/Blog';

<BlogList />
```

**New Format:**
```markdown
---
sidebar: false
---

# Blog

Blog introduction content...
```

### 5. Update Theme Configuration

Remove blog style references from `theme/index.tsx`:

```typescript
// Remove this line
import './styles/blog.css';
```

## Summary

The new blog implementation has the following advantages:

1. **Simpler**: No custom components required, works out of the box
2. **More Standard**: Consistent with Rspress official implementation
3. **Easier to Maintain**: Follows official conventional routing conventions
4. **Easier to Extend**: Can easily integrate Rspress plugin ecosystem
5. **Better Documentation**: Provides detailed usage guides

For more information about blog features, please refer to [Blog Feature Usage Guide](./blog.md).
