---
order: 7
---

# ICP Record

Rspress Theme AIm provides built-in ICP record information display functionality to meet Chinese compliance requirements.

## Configuration Method

Add ICP record configuration in `themeConfig` of `rspress.config.ts`:

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  themeConfig: {
    // ICP record configuration
    icpNumber: '京ICP备12345678号',  // Optional, not displayed when empty
  },
});
```

## Configuration Options

| Option | Description | Default Value |
|--------|-------------|---------------|
| `icpNumber` | ICP record number | Empty (not displayed) |

## Display Effect

When configured, the ICP record information will be displayed at the bottom of the page, following the copyright information, in the format:

```
京ICP备12345678号
```

The ICP record number will be automatically linked to the MIIT ICP record query website.

## Usage Examples

### Example 1: Enable ICP Record Display

```typescript
themeConfig: {
  icpNumber: '京ICP备12345678号',
}
```

### Example 2: Disable ICP Record Display

```typescript
themeConfig: {
  icpNumber: '',  // Empty string, not displayed
}
```

Or simply do not configure `icpNumber`.

## Notes

- The ICP record information is only displayed when `icpNumber` is configured and not empty
- The link for ICP record query points to the official MIIT website: `https://beian.miit.gov.cn/`
- Make sure to use the correct ICP record number format as required by the MIIT