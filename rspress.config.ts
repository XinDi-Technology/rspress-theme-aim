import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  base: '/rspress-theme-aim/',
  root: path.join(__dirname, 'docs'),
  title: '人工智能制造 · Rspress Theme AIm',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://xindi-technology.github.io/rspress-theme-aim',
      },
    ],
  },
  theme: path.join(__dirname, 'theme/index.tsx'),
});
