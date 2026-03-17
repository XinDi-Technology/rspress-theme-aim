# SEO Meta Tags

Rspress Theme AIm provides support for SEO meta tags to help improve your site's visibility in search engines.

## Configuration Method

Add SEO meta tags to `rspress.config.ts`:

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  builderConfig: {
    html: {
      tags: [
        // SEO optimization tags
        {
          tag: 'meta',
          attrs: {
            name: 'description',
            content: 'Your site description',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content: 'keyword1, keyword2, keyword3',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'Your name or organization',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index, follow',
          },
        },
      ],
    },
  },
});
```

## Configuration Options

| Tag | Description | Example Value |
|-----|-------------|---------------|
| `description` | Brief description of your site | "Zero local setup · GitHub Pages one-click deployment Rspress documentation template" |
| `keywords` | Comma-separated list of keywords | "Rspress, documentation, GitHub Pages, static site" |
| `author` | Author or organization name | "XinDi Technology" |
| `robots` | Instructions for search engine crawlers | "index, follow" |

## Example

```typescript
builderConfig: {
  html: {
    tags: [
      // SEO optimization tags
      {
        tag: 'meta',
        attrs: {
          name: 'description',
          content: 'Zero local setup · GitHub Pages one-click deployment Rspress documentation template, supporting copyright information, ICP record, public security record and other features',
        },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'keywords',
          content: 'Rspress, documentation, GitHub Pages, ICP record, public security record, static site, zero local environment',
        },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'author',
          content: 'XinDi Technology',
        },
      },
      {
        tag: 'meta',
        attrs: {
          name: 'robots',
          content: 'index, follow',
        },
      },
    ],
  },
},
```

## Benefits

- **Improved search rankings**: Well-crafted meta tags can help your site rank higher in search results
- **Better click-through rates**: A compelling description can increase the likelihood of users clicking on your site
- **Clearer content understanding**: Search engines can better understand what your site is about
- **Targeted traffic**: Proper keywords can attract more relevant visitors to your site

## Best Practices

- **Description**: Keep it under 160 characters, make it compelling and relevant
- **Keywords**: Use 5-10 relevant keywords, avoid keyword stuffing
- **Author**: Use a consistent author name or organization
- **Robots**: Use "index, follow" for most sites

## Notes

- Meta tags are just one part of SEO; quality content and backlinks are also important
- Search engines may not always use your meta description, but it's still worth providing
- Regularly review and update your meta tags to keep them relevant
- Consider adding Open Graph tags for better social media sharing