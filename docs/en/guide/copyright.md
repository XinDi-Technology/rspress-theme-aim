# Copyright Information

Rspress Theme AIm provides a built-in copyright information display feature at the bottom of the page, which can be configured according to your needs.

## Configuration Method

Add copyright configuration in `themeConfig` of `rspress.config.ts`:

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  themeConfig: {
    // Copyright information configuration
    companyName: 'A Company',  // Optional, defaults to site title
    companyUrl: 'https://example.com',  // Optional, defaults to current domain
    startYear: 2020,  // Optional, defaults to 2020
    endYear: 2023,    // Optional, defaults to current year
  },
});
```

## Configuration Options

| Option | Description | Default Value |
|--------|-------------|---------------|
| `companyName` | Company name displayed in copyright information | Site title |
| `companyUrl` | URL linked to company name | Current domain |
| `startYear` | Starting year of copyright | 2020 |
| `endYear` | Ending year of copyright | Current year |

## Display Effect

When configured, the copyright information will be displayed at the bottom of the page in the format:

```
© 2020-2023 A Company
```

Where "A Company" is a clickable link that redirects to the configured URL.

## Usage Examples

### Example 1: Default Configuration

```typescript
themeConfig: {
  // No copyright configuration, uses defaults
}
```

Display effect:
```
© 2020-2023 [Site Title]
```

### Example 2: Custom Company Name and URL

```typescript
themeConfig: {
  companyName: 'My Company',
  companyUrl: 'https://mycompany.com',
  startYear: 2018,
}
```

Display effect:
```
© 2018-2023 My Company
```

### Example 3: Fixed Year Range

```typescript
themeConfig: {
  companyName: 'Example Inc.',
  startYear: 2015,
  endYear: 2023,
}
```

Display effect:
```
© 2015-2023 Example Inc.
```

## Notes

- The copyright information is displayed only when at least one of `companyName`, `companyUrl`, or `startYear` is configured
- If `endYear` is not set, it will automatically use the current year
- The company name will be displayed as a link only when `companyUrl` is configured