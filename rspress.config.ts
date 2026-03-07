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
        content: 'https://github.com/XinDi-Technology/rspress-theme-aim',
      },
    ],
    // 版权信息配置
    // companyName: 'A公司',  // 可选，默认为站点 title
    // companyUrl: 'https://example.com',  // 可选，默认为当前域名
    startYear: 2025,  // 可选，默认为 2020
    // endYear: 2023,    // 可选，默认为当前年份
    // ICP备案配置
    icpNumber: '鲁ICP备12345678号-1',  // 可选，为空时不显示 ICP 备案信息
  },
});
