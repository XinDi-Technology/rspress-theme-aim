# Copyright Information

Rspress Theme AIm provides a built-in copyright information display feature at the bottom of the page, which can be configured according to your needs.

## Configuration Method

Add copyright configuration in `themeConfig` of `rspress.config.ts`:

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  themeConfig: {
    // Copyright information configuration
    companyName: 'Your Company',  // Required, company name
    companyUrl: 'https://example.com',  // Required, company URL
    startYear: 2020,  // Optional, defaults to 2020
    endYear: 2023,    // Optional, defaults to current year
    // Powered by configuration (optional)
    poweredBy: [
      { name: 'Rspress', url: 'https://rspress.rs/' },
      { name: 'AIm', url: 'https://xindi-technology.github.io/rspress-theme-aim' }
    ],
  },
});
```

## Configuration Options

| Option | Type | Required | Default Value | Description |
|--------|------|----------|---------------|-------------|
| `companyName` | string | Yes | - | Company name displayed in copyright information |
| `companyUrl` | string | Yes | - | URL linked to company name |
| `startYear` | number | No | 2020 | Starting year of copyright |
| `endYear` | number | No | Current year | Ending year of copyright |
| `poweredBy` | array | No | See below | Powered by link configuration |

### poweredBy Configuration

`poweredBy` is an array, each element contains:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Display name |
| `url` | string | Yes | Link URL |

**Default value**:
```typescript
[
  { name: 'Rspress', url: 'https://rspress.rs/' },
  { name: 'AIm', url: 'https://xindi-technology.github.io/rspress-theme-aim' }
]
```

## Display Effect

When configured, the copyright information will be displayed at the bottom of the page in the format:

```
© 2020-2023 [Your Company](https://example.com) · Powered by Rspress & AIm
```

Where "Your Company" is a clickable link that redirects to the configured URL.

## Usage Examples

### Example 1: Basic Configuration

```typescript
themeConfig: {
  companyName: 'My Company',
  companyUrl: 'https://mycompany.com',
}
```

Display effect:
```
© 2020-2023 [My Company](https://mycompany.com) · Powered by Rspress & AIm
```

### Example 2: Custom Year Range

```typescript
themeConfig: {
  companyName: 'Open Source Project',
  companyUrl: 'https://github.com/example/project',
  startYear: 2019,
  endYear: 2024,
}
```

Display effect:
```
© 2019-2024 [Open Source Project](https://github.com/example/project) · Powered by Rspress & AIm
```

### Example 3: Custom Powered by

```typescript
themeConfig: {
  companyName: 'My Project',
  companyUrl: 'https://my-project.com',
  poweredBy: [
    { name: 'Vue', url: 'https://vuejs.org/' },
    { name: 'Vite', url: 'https://vitejs.dev/' }
  ],
}
```

Display effect:
```
© 2020-2025 [My Project](https://my-project.com) · Powered by Vue & Vite
```

### Example 4: Disable Powered by

```typescript
themeConfig: {
  companyName: 'My Project',
  companyUrl: 'https://my-project.com',
  poweredBy: [],  // Set to empty array to disable
}
```

Display effect:
```
© 2020-2025 [My Project](https://my-project.com)
```

### Example 5: Complete Configuration

```typescript
themeConfig: {
  companyName: 'AI Manufacturing',
  companyUrl: 'https://xindi-technology.github.io/rspress-theme-aim/',
  startYear: 2025,
  endYear: 2026,
  poweredBy: [
    { name: 'Rspress', url: 'https://rspress.rs/' },
    { name: 'AIm', url: 'https://xindi-technology.github.io/rspress-theme-aim' }
  ],
}
```

Display effect:
```
© 2025-2026 [AI Manufacturing](https://xindi-technology.github.io/rspress-theme-aim/) · Powered by Rspress & AIm
```

## Style Customization

You can customize the copyright information style through CSS variables. Edit the `theme/styles/index.css` file:

```css
/* Copyright container */
.rspress-copyright-footer {
  padding: 24px;
  border-top: 1px solid var(--rp-c-divider-light);
  background-color: var(--rp-c-bg);
}

/* Copyright content */
.rspress-copyright-content {
  text-align: center;
  font-size: 14px;
  color: var(--rp-c-text-2);
}

/* Company link */
.rspress-copyright-link {
  color: var(--rp-c-brand);
  text-decoration: none;
}

.rspress-copyright-link:hover {
  color: var(--rp-c-brand-dark);
  text-decoration: underline;
}

/* Divider */
.rspress-copyright-divider {
  color: var(--rp-c-text-3);
  margin: 0 4px;
}

/* Powered by text */
.rspress-copyright-powered-by {
  color: var(--rp-c-text-2);
}
```

## Disable Copyright Information

To completely disable copyright information display, you can delete or comment out the relevant code in `theme/index.tsx`:

```typescript
// theme/index.tsx
function Layout(props: React.ComponentProps<typeof BasicLayout>) {
  return (
    <>
      <BasicLayout {...props} />
      {/* Comment out the following line to disable copyright information */}
      {/* <CopyrightFooter /> */}
    </>
  );
}
```

## Technical Implementation

The copyright information feature is implemented through the following files:

- `theme/index.tsx` - Theme entry, injects copyright component
- `theme/components/CopyrightFooter.tsx` - Copyright information component
- `theme/styles/index.css` - Style definitions

For further customization of the copyright information display logic, you can directly modify the `CopyrightFooter.tsx` component.