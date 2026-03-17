# Public Security Record

Rspress Theme AIm provides built-in public security record information display functionality to meet Chinese compliance requirements.

## Configuration Method

Add public security record configuration in `themeConfig` of `rspress.config.ts`:

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  themeConfig: {
    // Public security record configuration
    gonganNumber: '鲁公网安备12345678912345号',  // Optional, not displayed when empty
  },
});
```

## Configuration Options

| Option | Description | Default Value |
|--------|-------------|---------------|
| `gonganNumber` | Public security record number | Empty (not displayed) |

## Display Effect

When configured, the public security record information will be displayed at the bottom of the page, following the ICP record information, in the format:

```
[Public Security Icon] 鲁公网安备12345678912345号
```

The public security record number will be automatically linked to the Ministry of Public Security record query website.

## Usage Examples

### Example 1: Enable Public Security Record Display

```typescript
themeConfig: {
  gonganNumber: '鲁公网安备12345678912345号',
}
```

### Example 2: Disable Public Security Record Display

```typescript
themeConfig: {
  gonganNumber: '',  // Empty string, not displayed
}
```

Or simply do not configure `gonganNumber`.

## Notes

- The public security record information is only displayed when `gonganNumber` is configured and not empty
- The link for public security record query points to the official MPS website: `https://beian.mps.gov.cn/`
- The public security icon is automatically included and does not need to be configured separately
- Make sure to use the correct public security record number format