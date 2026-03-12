import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { pluginSitemap } from '@rspress/plugin-sitemap';

export default defineConfig({
  base: '/rspress-theme-aim/',
  root: path.join(__dirname, 'docs'),
  title: '人工智能制造 · Rspress Theme AIm',
  plugins: [
    pluginSitemap({
      siteUrl: 'https://xindi-technology.github.io/rspress-theme-aim/',
    }),
  ],
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
    icpNumber: '',  // 可选，为空时不显示 ICP 备案信息
    // 公安联网备案配置
    gonganNumber: '',  // 可选，为空时不显示公安备案信息，默认为：鲁公网安备12345678912345号
    // 编辑此页链接配置
    editLink: {
      docRepoBaseUrl: 'https://github.com/XinDi-Technology/rspress-theme-aim/tree/main/docs',
    },
    // 最后更新时间配置
    lastUpdated: true,  // 显示文档最后更新时间
  },
});
