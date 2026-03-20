---
order: 4
---

# Bing Webmasters

Rspress Theme AIm provides support for Bing Webmasters verification to help improve your site's visibility in Bing search results.

## Verification Method

Add the Bing Webmasters verification tag to `rspress.config.ts`:

```typescript
import { defineConfig } from '@rspress/core';

export default defineConfig({
  builderConfig: {
    html: {
      tags: [
        // Bing Webmasters verification tag
        {
          tag: 'meta',
          attrs: {
            name: 'msvalidate.01',
            content: 'YOUR_BING_VERIFICATION_CODE',
          },
        },
      ],
    },
  },
});
```

## How to Get Verification Code

1. Sign in to [Bing Webmasters](https://www.bing.com/webmasters/)
2. Add your site URL
3. Select "Meta tag" as the verification method
4. Copy the verification code (the part after `content="`)
5. Paste it into the `content` field in your configuration

## Example

```typescript
builderConfig: {
  html: {
    tags: [
      // Bing Webmasters verification tag
      {
        tag: 'meta',
        attrs: {
          name: 'msvalidate.01',
          content: '1234567890ABCDEF1234567890ABCDEF',
        },
      },
    ],
  },
},
```

## Verification Process

1. After adding the verification tag to your configuration, rebuild and deploy your site
2. Return to Bing Webmasters and click "Verify"
3. Bing will check for the verification tag on your site
4. If successful, your site will be verified

## Benefits

- **Improved search visibility**: Bing Webmasters helps Bing crawl and index your site more effectively
- **Performance insights**: Get data on how your site performs in Bing search
- **Indexing control**: Submit sitemaps and control how Bing indexes your content
- **Issue detection**: Get alerts for issues that might affect your site's performance

## Notes

- The verification tag must be added to all pages of your site, which is why we add it to the global HTML configuration
- Keep your verification code confidential
- If you change your site's domain, you'll need to re-verify with Bing
- Verification typically takes a few minutes but can take up to 24 hours in some cases