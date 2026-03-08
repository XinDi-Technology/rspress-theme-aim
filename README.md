# 人工智能制造 · Rspress Theme AIm

> 一个完全基于 GitHub 网页 和 GitHub Pages 的 **Rspress 文档站模板**。  
> Zero local setup, Rspress + GitHub Pages starter you can run entirely in the browser.

在线预览（示例）：  
- `https://XinDi-Technology.github.io/rspress-theme-aim/`

---

## ✨ 特性 Features

- **零本地环境 Zero local setup**
  - 无需在本机安装 Node / pnpm / Rspress
  - 所有操作只通过 GitHub 网页完成

- **基于 Rspress V2**
  - 静态站点生成（SSG）
  - 全文搜索、MDX 支持、多语言、多版本等能力
  - 参考官方介绍：[Rspress 介绍](https://rspress.rs/zh/guide/start/introduction)

- **GitHub Pages 自动部署**
  - 内置 `.github/workflows/deploy.yml`
  - 提交代码后自动构建并发布到 GitHub Pages

- **可扩展的主题与插件**
  - 后续可按需：
    - 使用 CSS 变量和 BEM 类名定制样式：[CSS 变量](https://rspress.rs/zh/ui/vars)
    - 基于 `theme/index.tsx` 扩展默认主题：[自定义主题](https://rspress.rs/zh/guide/basic/custom-theme)
    - 接入 Rspress 插件生态：[插件机制介绍](https://rspress.rs/zh/plugin/system/introduction)

---

## 🚀 快速开始（作为模板使用）

> 目标：在 **完全不使用本地环境** 的前提下，基于本模板创建你的 Rspress 文档站，并部署到 GitHub Pages。

### 1. 使用本模板创建你的仓库

1. 打开本仓库主页：`https://github.com/XinDi-Technology/rspress-theme-aim`
2. 点击右上角 **Use this template → Create a new repository**
3. 填写：
   - **Repository name**：比如 `my-rspress-site`
   - **Public / Private**：建议 Public（Pages 更简单）
4. 点击 **Create repository**。
5. 你的新仓库已经包含和本仓库一样的所有文件。

### 2. 修改 `base` 为你的仓库名（重要）

1. 在新仓库中打开 `rspress.config.ts`。
2. 找到这一行：

```ts
base: '/rspress-theme-aim/',
```

改成：

```ts
base: '/<你的仓库名>/',
```

例如你的仓库叫 my-rspress-site，就写：

```ts
base: '/my-rspress-site/',
```

> [!IMPORTANT]
> GitHub Pages 的访问路径通常是：
> https://<你的 GitHub 用户名>.github.io/<你的仓库名>/
> base 必须与 <你的仓库名> 保持一致，静态资源和路由才会正常工作。

提交变更到 main 分支。

### 3. 开启 GitHub Pages（使用 Actions）

在新仓库中进入 Settings → Pages。
在 Build and deployment 区域：
Source：选择 GitHub Actions。
保存设置。

### 4. 触发一次部署并访问站点

在仓库中任意修改一个小文件（比如 README.md），提交到 main。

打开 Actions 页面，等待 Deploy Rspress to GitHub Pages 工作流变绿 ✅。

回到 Settings → Pages，你会看到站点 URL，形如：

https://<你的 GitHub 用户名>.github.io/<你的仓库名>/
打开该链接，即可看到你的 Rspress 文档站。

📁 项目结构 Project Structure

```
.
├── docs
│   ├── index.md           # 首页（Hero）配置
│   └── guide
│       └── index.md       # 指南首页
├── rspress.config.ts      # Rspress 配置（标题、描述、base 等）
├── package.json           # 依赖与脚本
├── .github
│   └── workflows
│       └── deploy.yml     # GitHub Pages 部署流程
├── tsconfig.json
└── README.md              # 本说明文档
```

如需添加更多文档，只需在 docs/ 目录下增加 .md/.mdx 文件并提交。

---

### 🛠 本地开发（可选）

虽然本模板主打“零本地环境”，但你也可以选择 clone 到本地进行开发。

```shell
git clone https://github.com/<你的用户名>/<你的仓库名>.git
cd <你的仓库名>
pnpm install    # 或 npm install / yarn
pnpm dev        # 启动本地开发服务器
pnpm build      # 生产环境构建
```

> [!IMPORTANT]
>
> 本模板默认使用 pnpm，你也可以修改 deploy.yml 和本地命令改用 npm 或 yarn。

### 🎨 自定义主题与样式（进阶）

本模板默认使用 Rspress 提供的内置主题，已足够支撑大多数文档站场景。
当你希望进一步定制视觉风格或布局结构时，可以参考官方文档：

自定义主题：<https://rspress.rs/zh/guide/basic/custom-theme>

CSS 变量（品牌色、首页背景、代码块等）：
<https://rspress.rs/zh/ui/vars>

插件机制（扩展 Markdown、构建流程、全局组件等）：
<https://rspress.rs/zh/plugin/system/introduction>

一个典型的样式扩展方案是：

新建 theme/index.tsx，重导出默认主题并引入自定义 CSS；
新建 theme/index.css，从官方 CSS 变量页面复制默认变量并按需修改。

### 🔄 升级 Rspress 版本

本模板默认依赖：

```
"@rspress/core": "^2.0.4"
```

这意味着：

同一大版本（2.x）的小版本更新会自动跟进；
当 Rspress 发布 3.x 时，如果你希望升级，只需在 package.json 中修改为：

```
"@rspress/core": "^3.0.0"
```

然后提交代码，让 GitHub Actions 重新构建即可。
如遇大版本不兼容变更，请参考官方升级指南调整 rspress.config.ts 等配置。

### 🆙 升级模板主题功能

本模板会持续更新新的主题功能（版权信息、备案信息、编辑链接等）。

**查看升级指南**：[docs/guide/upgrade.md](./docs/guide/upgrade.md)

**快速升级步骤**：
1. 查看 [Releases](https://github.com/XinDi-Technology/rspress-theme-aim/releases) 了解新版本功能
2. 复制 `theme/` 目录到你的仓库（核心文件）
3. （可选）复制 `docs/guide/*.md` 功能文档
4. 提交并推送，等待自动部署

> 💡 **提示**：升级前请备份你的自定义修改，特别是 `theme/` 目录下的文件。

### 📄 License

本项目使用 MIT License。

---
