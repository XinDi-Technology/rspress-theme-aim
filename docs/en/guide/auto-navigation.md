---
order: 12
---

# Auto Navigation

Rspress Theme AIm uses Rspress's built-in auto-navigation feature to simplify document management, eliminating the need to manually maintain navigation configuration files.

## Overview

### Traditional Approach vs Auto Navigation

#### Traditional Approach
Requires manual maintenance of two configuration files:
- `_meta.json` - Controls sidebar display order
- `_nav.json` - Controls top navigation details

Every time you add a new document:
1. Create the document file
2. Modify `_meta.json` to add the new entry
3. Modify `_nav.json` to add navigation links

#### Auto Navigation Approach
Simply:
1. Create the document file with `order` frontmatter

All navigation and sidebars are generated automatically!

## How It Works

### 1. Top Navigation
Configure top-level navigation items through `_nav.json`, only specifying navigation text and links:

```json
[
  {
    "text": "Guide",
    "link": "/guide/"
  },
  {
    "text": "Blog",
    "link": "/blog/"
  }
]
```

### 2. Sidebar Navigation
Rspress automatically scans all document files in the directory and sorts them based on the `order` frontmatter.

## How to Add a New Document

### Step 1: Create the Document File

Create a new Markdown file in the `docs/en/guide/` directory, for example `new-feature.md`:

```markdown
---
order: 13
---

# New Feature Description

Here is the detailed description of the new feature...
```

### Step 2: Done!

It's that simple! The new document will automatically appear in the sidebar, with its position determined by the `order` value.

## order Frontmatter Explained

### Purpose
`order` controls the display order of documents in the sidebar - smaller values appear first.

### Example
```markdown
---
order: 1
---

# First Document
```

```markdown
---
order: 2
---

# Second Document
```

### Sorting Rules
- Smaller values appear first
- Documents with the same `order` value are sorted alphabetically by filename
- Documents without `order` appear after those with `order`

## Best Practices

### 1. Use Spaced Order Values
We recommend using spaced values like 10, 20, 30 to make it easier to insert new documents later:

```markdown
---
order: 10
---

# Basic Configuration
```

```markdown
---
order: 20
---

# Advanced Configuration
```

This way, if you need to insert a new document between these two, you can use `order: 15`.

### 2. Maintain Consistency
Use the same `order` values for Chinese and English documents to ensure consistent sidebar structure.

### 3. File Naming Conventions
Use lowercase letters and hyphens for file names:
- ✅ `auto-navigation.md`
- ✅ `home-features.md`
- ❌ `AutoNavigation.md`
- ❌ `home_features.md`

## Multi-language Support

### Chinese Documents
Location: `docs/zh/guide/`
```markdown
---
order: 12
---

# 自动导航功能
```

### English Documents
Location: `docs/en/guide/`
```markdown
---
order: 12
---

# Auto Navigation
```

## Frequently Asked Questions

### Q: Why doesn't my document appear in the sidebar?
A: Check the following:
1. Is the file in the correct directory?
2. Is the filename correct (using `.md` or `.mdx` extension)?
3. Is the frontmatter format correct?

### Q: How to hide a document?
A: Add `hidden: true` to the frontmatter:
```markdown
---
order: 12
hidden: true
---

# Hidden Document
```

### Q: How to customize the document title?
A: Add `title` to the frontmatter:
```markdown
---
order: 12
title: Custom Title
---

# Document Title
```

## Technical Details

### Auto Navigation Configuration
Enable auto navigation in `rspress.config.ts`:

```typescript
export default defineConfig({
  themeConfig: {
    enableContentAnimation: true,
  },
});
```

### File Scanning Rules
Rspress automatically scans the following directories:
- `docs/zh/` - Chinese documents
- `docs/en/` - English documents

And automatically generates navigation and sidebars based on the directory structure.
