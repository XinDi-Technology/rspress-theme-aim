# Last Updated Feature

Rspress has a built-in "Last Updated" feature that displays the last modification time of the document based on Git history.

## Configuration Method

Add `lastUpdated` configuration in `themeConfig` of `rspress.config.ts`:

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  themeConfig: {
    // Last updated time configuration
    lastUpdated: true,  // Display document last updated time
  },
});
```

## Configuration Options

| Option | Description | Default Value |
|--------|-------------|---------------|
| `lastUpdated` | Whether to display last updated time | `false` |

## Display Effect

When enabled, the last updated time will be displayed at the bottom of each document page in the format:

```
Last Updated: YYYY/MM/DD, HH:MM:SS
```

## How It Works

Rspress uses Git to get the last commit time of the current document file. This means:

1. The repository must be a Git repository
2. The file must be tracked by Git
3. The build environment must have Git installed

## Usage Examples

### Example 1: Enable Last Updated Display

```typescript
themeConfig: {
  lastUpdated: true,
}
```

### Example 2: Disable Last Updated Display

```typescript
themeConfig: {
  lastUpdated: false,  // Or simply do not configure
}
```

## Notes

- The last updated time is based on Git commit history, not file system modification time
- If the file is not tracked by Git, the last updated time will not be displayed
- In CI/CD environments, make sure Git is installed and the repository is properly cloned with commit history