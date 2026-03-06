import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  base: '/rspress-theme-aim/',
  root: path.join(__dirname, 'docs'),
  title: '人工智能制造 · Rspress Theme AIm',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://xindi-technology.github.io/rspress-theme-aim',
      },
    ],
  },
});
