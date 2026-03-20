---
order: 9
---

# Edit Link Feature

Rspress has a built-in "Edit this page" feature that allows users to directly jump to GitHub to edit the current document page.

## Configuration Method

Add `editLink` configuration in `themeConfig` of `rspress.config.ts`:

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  themeConfig: {
    // Edit link configuration
    editLink: {
      docRepoBaseUrl: 'https://github.com/your-username/your-repo/tree/main/docs',
    },
  },
});
```

## Configuration Options

| Option | Description |
|--------|-------------|
| `docRepoBaseUrl` | Base path of the documentation in the GitHub repository |

## How It Works

Rspress will automatically concatenate `docRepoBaseUrl` with the current page's file path to generate the complete edit link.

For example, when a user visits the `/guide/edit-link` page, the edit link will point to:

```
https://github.com/your-username/your-repo/tree/main/docs/guide/edit-link.md
```

## Disabling the Feature

If you don't need this feature, simply don't configure `editLink` and it won't be displayed by default.

## Example

Configuration for this project:

```typescript
editLink: {
  docRepoBaseUrl: 'https://github.com/XinDi-Technology/rspress-theme-aim/tree/main/docs',
},
```