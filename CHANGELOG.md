# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2026-03-18

### Added

- 博客功能（基于 Rspress 官方实现方式）
  - 约定式路由支持
  - MDX 文件格式
  - Frontmatter 元数据配置（标题、日期、作者、分类、标签）
  - _meta.json 导航配置
  - 博客首页和文章页
- 博客功能使用文档（中英文版本）
  - 创建博客文章指南
  - Frontmatter 配置说明
  - _meta.json 配置指南
  - 最佳实践和文件命名规范

### Changed

- 重构博客功能实现，采用 Rspress 官方推荐方式
- 移除自定义 Blog 组件和样式
- 更新博客首页和示例文章格式

## [2.1.0] - 2026-03-14

### Added

- 首页 features 配置支持（支持 span 和 link 属性）
- Sitemap 功能（使用 @rspress/plugin-sitemap）
- Bing Webmasters 验证支持
- SEO 优化标签（description、keywords、author、robots）
- "Powered by Rspress & AIm" 底部链接
- 新增 Markdown 语法测试文档，展示项目支持的 Markdown 语法

### Changed

- 升级 Rspress 至 2.0.5

## [2.0.0] - 2026-03-08

- 初始版本发布

## [1.0.0] - 2026-03-07

- 内部版本
