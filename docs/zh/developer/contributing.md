---
order: 2
---

# 贡献指南 Contributing Guide

感谢你考虑为 Rspress Theme AIm 做贡献！Thank you for considering contributing to Rspress Theme AIm!

## 📋 目录 Table of Contents

- [行为准则 Code of Conduct](#行为准则-code-of-conduct)
- [如何贡献 How to Contribute](#如何贡献-how-to-contribute)
- [开发流程 Development Process](#开发流程-development-process)
- [提交规范 Commit Guidelines](#提交规范-commit-guidelines)
- [代码规范 Code Standards](#代码规范-code-standards)
- [文档规范 Documentation Standards](#文档规范-documentation-standards)

---

## 行为准则 Code of Conduct

### 我们的承诺 Our Pledge

为了营造一个开放和友好的环境，我们作为贡献者和维护者承诺：无论年龄、体型、残疾、种族、性别认同和表达、经验水平、教育程度、社会经济地位、国籍、外貌、种族、宗教或性取向如何，参与我们的项目和社区都将为每个人提供无骚扰的体验。

### 我们的标准 Our Standards

**积极行为包括：**
- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

**不可接受的行为包括：**
- 使用性化的语言或图像，以及不受欢迎的性关注或性骚扰
- 捣乱、侮辱/贬损评论以及人身或政治攻击
- 公开或私下的骚扰
- 未经明确许可，发布他人的私人信息，例如物理地址或电子地址
- 在专业环境中可能被合理认为不适当的其他行为

---

## 如何贡献 How to Contribute

### 报告 Bug Reporting Bugs

在提交 Bug 报告之前，请先：
1. 检查 [Issues](https://github.com/XinDi-Technology/rspress-theme-aim/issues) 中是否已有相同问题
2. 确认你使用的是最新版本
3. 阅读相关文档，确认不是使用方式问题

提交 Bug 报告时，请包含：
- **清晰的标题和描述**
- **复现步骤** - 详细的步骤让我们能重现问题
- **预期行为** - 你期望发生什么
- **实际行为** - 实际发生了什么
- **环境信息** - 操作系统、浏览器版本、Node.js 版本等
- **截图** - 如果适用，添加截图帮助解释问题
- **代码示例** - 提供最小可复现代码示例

#### Bug 报告模板 Bug Report Template

```markdown
## Bug 描述 Bug Description
[清晰简洁地描述 bug]

## 复现步骤 Steps to Reproduce
1. 进入 '...'
2. 点击 '...'
3. 滚动到 '...'
4. 看到错误

## 预期行为 Expected Behavior
[描述你期望发生什么]

## 实际行为 Actual Behavior
[描述实际发生了什么]

## 截图 Screenshots
[如果适用，添加截图]

## 环境信息 Environment
- OS: [e.g. Windows 10, macOS 11.2]
- Browser: [e.g. Chrome 90, Firefox 88]
- Node.js: [e.g. 16.14.0]
- Rspress: [e.g. 2.0.6]

## 其他信息 Additional Context
[添加任何其他关于问题的信息]
```

### 建议新功能 Suggesting New Features

我们欢迎新功能建议！请在 Issue 中详细描述：
- **功能描述** - 清晰描述你希望的功能
- **使用场景** - 为什么需要这个功能
- **实现建议** - 如果有想法，可以提供实现建议
- **替代方案** - 考虑过的其他替代方案

#### 功能建议模板 Feature Request Template

```markdown
## 功能描述 Feature Description
[清晰简洁地描述你希望的功能]

## 使用场景 Use Case
[描述为什么需要这个功能，它解决了什么问题]

## 期望行为 Expected Behavior
[描述这个功能应该如何工作]

## 替代方案 Alternatives Considered
[描述你考虑过的其他替代方案]

## 其他信息 Additional Context
[添加任何其他相关信息或截图]
```

### 改进文档 Improving Documentation

文档改进包括：
- 修正拼写或语法错误
- 添加缺失的文档
- 改进现有文档的清晰度
- 添加更多示例
- 翻译文档

---

## 开发流程 Development Process

### 1. Fork 并 Clone 仓库

```bash
# Fork 后 clone 你的仓库
git clone https://github.com/<your-username>/rspress-theme-aim.git
cd rspress-theme-aim

# 添加上游仓库
git remote add upstream https://github.com/XinDi-Technology/rspress-theme-aim.git

# 安装依赖
pnpm install
```

### 2. 创建分支

```bash
# 从 main 创建新分支
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/your-bug-fix
```

分支命名规范：
- `feature/` - 新功能
- `fix/` - Bug 修复
- `docs/` - 文档改进
- `refactor/` - 代码重构
- `test/` - 测试相关
- `chore/` - 其他杂项

### 3. 进行开发

```bash
# 启动开发服务器
pnpm dev

# 在浏览器中打开 http://localhost:3000/rspress-theme-aim/
```

### 4. 测试你的修改

确保：
- ✅ 代码能够正常编译 (`pnpm build`)
- ✅ 本地预览正常 (`pnpm preview`)
- ✅ 多语言功能正常（中英文）
- ✅ 文档更新完整

### 5. 提交代码

```bash
# 查看修改
git status
git diff

# 添加修改
git add .

# 提交（遵循提交规范）
git commit -m "feat: 添加新功能描述"
# 或
git commit -m "fix: 修复某个 bug"
```

### 6. 推送并创建 PR

```bash
# 推送到你的 fork
git push origin feature/your-feature-name
```

然后在 GitHub 上创建 Pull Request。

---

## 提交规范 Commit Guidelines

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范。

### 提交消息格式 Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型

- `feat` - 新功能 (new feature)
- `fix` - Bug 修复 (bug fix)
- `docs` - 文档修改 (documentation changes)
- `style` - 代码格式修改，不影响功能 (code style changes)
- `refactor` - 代码重构 (code refactoring)
- `perf` - 性能优化 (performance improvements)
- `test` - 测试相关 (adding or modifying tests)
- `chore` - 构建过程或辅助工具的变动 (build process or auxiliary tool changes)
- `ci` - CI 配置修改 (CI configuration changes)
- `revert` - 回滚之前的提交 (revert previous commit)

### Scope 范围（可选）

- `blog` - 博客功能相关
- `copyright` - 版权信息相关
- `icp` - ICP 备案相关
- `gongan` - 公安备案相关
- `nav` - 导航相关
- `config` - 配置相关
- `deps` - 依赖相关

### 示例 Examples

```bash
# 新功能
feat(blog): 添加博客文章标签功能

# Bug 修复
fix(copyright): 修复公司名称显示错误

# 文档
docs: 更新 README.md 中的安装说明

# 重构
refactor(nav): 简化导航配置逻辑

# 性能优化
perf(blog): 优化博客文章列表加载速度

# 依赖更新
chore(deps): 升级 @rspress/core 到 2.0.6
```

---

## 代码规范 Code Standards

### TypeScript

- 使用 TypeScript 编写代码
- 为所有函数添加类型注解
- 避免使用 `any` 类型
- 使用接口定义数据结构

### React

- 使用函数组件和 Hooks
- 组件命名使用 PascalCase
- 事件处理函数使用 `handle` 前缀
- Props 使用接口定义

### 代码风格

- 使用 2 空格缩进
- 使用单引号
- 语句末尾不加分号
- 每行最大长度 100 字符

### 文件命名

- 组件文件：PascalCase (e.g., `CopyrightFooter.tsx`)
- 工具文件：kebab-case (e.g., `format-date.ts`)
- 样式文件：kebab-case (e.g., `blog.css`)

---

## 文档规范 Documentation Standards

### Markdown 文档

- 使用中文和英文双语
- 文档开头添加 `order` frontmatter
- 标题层级清晰（H1 > H2 > H3）
- 代码块指定语言类型
- 使用相对路径链接项目内文档

### 文档结构

```markdown
---
order: 1
---

# 标题

简短描述...

## 功能说明

详细说明...

## 使用方法

### 步骤 1

### 步骤 2

## 示例

\`\`\`typescript
// 代码示例
\`\`\`

## 常见问题

### Q: 问题 1
A: 答案 1

## 相关链接

- [链接 1](url)
- [链接 2](url)
```

### 多语言文档

- 中文文档放在 `docs/zh/`
- 英文文档放在 `docs/en/`
- 保持中英文文档结构一致
- 使用相同的 `order` 值

---

## Pull Request 指南 Pull Request Guidelines

### PR 标题

遵循提交规范：
```
feat: 添加新功能
fix: 修复某个 bug
docs: 更新文档
```

### PR 描述模板

```markdown
## 变更类型 Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## 变更描述 Description
[清晰描述你的变更]

## 相关 Issue Related Issue
Fixes #(issue number)

## 测试 Testing
- [ ] 本地测试通过
- [ ] 多语言测试通过
- [ ] 构建测试通过

## 截图 Screenshots
[如果适用，添加截图]

## 检查清单 Checklist
- [ ] 代码遵循项目的代码规范
- [ ] 已进行自我审查
- [ ] 已添加必要的注释
- [ ] 文档已更新
- [ ] 没有引入新的警告
- [ ] 添加了证明修复有效或功能工作的测试
- [ ] 新的和现有的单元测试通过
```

### PR 审查流程

1. **自动检查** - CI 自动运行构建测试
2. **代码审查** - 维护者会审查你的代码
3. **反馈修改** - 根据反馈进行必要的修改
4. **合并** - 审查通过后合并到 main 分支

---

## 获取帮助 Getting Help

如果你在贡献过程中遇到问题：

- 📖 查看 [文档](https://xindi-technology.github.io/rspress-theme-aim/)
- 💬 在 [Discussions](https://github.com/XinDi-Technology/rspress-theme-aim/discussions) 中提问
- 🐛 在 [Issues](https://github.com/XinDi-Technology/rspress-theme-aim/issues) 中搜索或提问

---

## 许可证 License

通过贡献代码，你同意你的贡献将根据项目的 MIT 许可证进行许可。

By contributing code, you agree that your contributions will be licensed under the project's MIT License.

---

再次感谢你的贡献！Thank you again for your contribution! 🎉
