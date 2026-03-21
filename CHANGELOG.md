# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- 添加 sync-template.yml workflow，自动同步核心文件到轻量级模板仓库
- 添加 `.github/SYNC_TEMPLATE.md` 文档，记录模板同步设置和常见问题解决方案

### Fixed

- 修复 sync-template.yml 中博客首页 import 路径错误，改为直接同步主仓库文件
- 修复 sync-template.yml 同步了不需要的 developer 目录，添加删除命令确保只同步基础文件

### Changed

- 简化 README.md，只引导用户使用轻量级模板
- 移除完整模板的 template 功能说明，改为普通仓库
- 添加用户名仓库（如 username.github.io）的特殊配置说明
- 重新梳理 sync-template.yml 同步逻辑，明确同步范围：
  - 只同步基础 guide 文档（index.md、auto-navigation.md、blog.md）
  - 不同步详细教程文档
  - 不同步 developer 目录
  - 不同步示例博客文章
- 优化 sync-template.yml 同步流程：
  - 移除 LICENSE 文件的同步（模板仓库创建时已包含）
  - 简化 Git 操作，提高同步效率
- 更新 `.github/SYNC_TEMPLATE.md` 文档：
  - 移除 LICENSE 文件的同步说明
  - 修正触发方式标题乱码
  - 更新同步流程图，移除不存在的步骤
  - 更新常见问题解决方案

## [2.4.0] - 2026-03-21

### Added

- 添加自动导航功能文档，说明如何使用 order frontmatter 管理文档顺序
- 添加 CONTRIBUTING.md 贡献指南，包含行为准则、贡献流程、提交规范等
- 添加代码规范配置（.editorconfig、.prettierrc、.eslintrc.js）
- 添加 lint 和 format 脚本到 package.json
- 添加开发者文档目录（docs/developer/），包含代码规范说明和贡献指南
- 添加 SECURITY.md 安全策略文档
- 添加 Issue 和 PR 模板，标准化问题报告和代码贡献流程

### Changed

- 使用 Rspress 内置自动导航功能，删除 _meta.json 文件，简化 _nav.json 配置
- 更新 README.md 中的 Rspress 版本号为 2.0.6
- 在 README.md 中添加贡献指南链接

## [2.3.0] - 2026-03-18

### Added

- 添加 Dependabot 配置，自动更新 npm 包和 GitHub Actions 依赖
- 添加 CI workflow，用于 PR 和 push 时的构建检查

### Changed

- 升级 @rspress/core 从 2.0.4 到 2.0.6 ([#4](https://github.com/xindi-technology/rspress-theme-aim/pull/4))
- 升级 release.yml 中 actions/github-script 从 v6 到 v8（Node 24 运行时）
- 统一 release.yml 中 pnpm 安装方式为 pnpm/action-setup@v4，与 deploy.yml 保持一致

### Fixed

- 修复博客国际化问题：当没有英文博客文章时显示中文"暂无博客文章" ([#1](https://github.com/xindi-technology/rspress-theme-aim/issues/1))
- 修复博客日期格式化国际化问题，使用统一的 `toLocaleDateString` 方法

## [2.2.0] - 2026-03-18

### Added

- 博客功能
- 多语言（中文/英文）功能

### Fixed

- 版权信息问题，通过增加多语言设置解决

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
