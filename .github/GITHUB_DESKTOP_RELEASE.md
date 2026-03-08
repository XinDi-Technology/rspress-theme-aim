# 使用 GitHub Desktop 进行版本发布

本指南详细说明如何使用 GitHub Desktop 进行版本发布，配合自动发布工作流完成整个发布过程。

## 📋 前提准备

1. **安装 GitHub Desktop**：如果还没有安装，从 [GitHub Desktop 官网](https://desktop.github.com/) 下载并安装
2. **克隆仓库**：在 GitHub Desktop 中克隆 `rspress-theme-aim` 仓库
3. **确保在 main 分支**：切换到 main 分支

## 🔖 步骤 1：更新 CHANGELOG.md

1. **打开项目**：在 GitHub Desktop 中打开 `rspress-theme-aim` 项目
2. **编辑 CHANGELOG.md**：
   - **对于初始版本（v1.0.0）**：直接创建版本条目，不需要 `[Unreleased]` 部分
   - **对于后续版本**：将 `[Unreleased]` 内容移动到新的版本条目下
   - 填写发布日期
   - 保持 `[Unreleased]` 部分为空（后续版本）

   **示例（v1.0.0 初始版本）**：
   ```markdown
   ## [1.0.0] - 2026-03-08

   ### Added
   - 初始版本发布
   - 版权信息底部显示功能

   [1.0.0]: https://github.com/XinDi-Technology/rspress-theme-aim/releases/tag/v1.0.0
   ```

   **示例（v1.1.0 后续版本）**：
   ```markdown
   ## [1.1.0] - 2026-03-09

   ### Added
   - 新增功能 X

   ## [Unreleased]

   [Unreleased]: https://github.com/XinDi-Technology/rspress-theme-aim/compare/v1.1.0...HEAD
   [1.1.0]: https://github.com/XinDi-Technology/rspress-theme-aim/releases/tag/v1.1.0
   [1.0.0]: https://github.com/XinDi-Technology/rspress-theme-aim/releases/tag/v1.0.0
   ```

3. **提交更改**：
   - 在 GitHub Desktop 中，确认 `CHANGELOG.md` 的更改
   - 填写提交信息，如：`chore: update CHANGELOG for v1.0.0`
   - 点击 **Commit to main**

4. **推送更改**：
   - 点击 **Push origin** 将更改推送到 GitHub

## 🏷️ 步骤 2：创建版本标签

### 方法 A：使用 GitHub Desktop 创建标签（推荐）

1. **打开仓库历史**：
   - 在 GitHub Desktop 中，点击 **History** 选项卡

2. **找到要标记的提交**：
   - 在历史记录中找到最新的提交（通常是你刚刚更新 CHANGELOG.md 的提交）
   - 右键点击该提交

3. **创建标签**：
   - 选择 **Create Tag...**
   - 在弹出的对话框中：
     - **Tag name**：输入版本号，如 `v1.0.0`
     - **Description**：（可选）输入标签描述
     - **Create tag on**：选择 `main` 分支
   - 点击 **Create Tag**

4. **推送标签**：
   - 点击 **Repository** → **Push Tags**
   - 或在推送更改时，确保选中 **Include tags** 选项

### 方法 B：使用命令行创建标签

如果你熟悉命令行，可以使用以下命令：

```bash
# 创建标签
git tag v1.0.0

# 推送标签
git push origin v1.0.0
```

## 🚀 步骤 3：等待自动发布

1. **查看 Actions 状态**：
   - 打开项目的 GitHub 页面
   - 点击 **Actions** 选项卡
   - 查看 **Automatic Release** 工作流的状态

2. **等待发布完成**：
   - 工作流会自动：
     - 提取版本号
     - 从 CHANGELOG.md 生成发布说明
     - 创建 GitHub Release
     - 部署站点到 GitHub Pages
   - 等待工作流显示 ✅ 完成状态

3. **验证发布**：
   - 点击 **Releases** 选项卡，查看新创建的发布
   - 访问部署后的站点，验证功能正常

## 🔍 步骤 4：发布后验证

### 1. 功能验证
- [ ] 新功能正常显示和工作
- [ ] 原有功能没有损坏
- [ ] 站点能正常访问
- [ ] 所有链接正常

### 2. 文档验证
- [ ] 新功能的文档已发布
- [ ] 升级指南已更新
- [ ] CHANGELOG 已更新
- [ ] 发布说明已创建

## 🐛 常见问题处理

### 1. 标签推送后没有自动发布

**原因**：可能是工作流触发条件不匹配或权限问题

**解决方案**：
- 检查标签格式是否正确（必须以 `v` 开头，如 `v1.0.0`）
- 查看 Actions 页面，确认工作流是否触发
- 检查工作流权限设置

### 2. 发布创建成功但部署失败

**原因**：可能是构建错误或配置问题

**解决方案**：
- 查看 Actions 日志，找到具体错误信息
- 修复问题后重新提交代码
- 手动触发部署工作流

### 3. 发布说明为空

**原因**：可能是 CHANGELOG.md 格式不正确或版本号不匹配

**解决方案**：
- 检查 CHANGELOG.md 中版本条目的格式
- 确保版本号与标签名称完全匹配
- 重新推送标签触发发布

## 📞 技术支持

如果在发布过程中遇到问题：

1. 查看项目的 [Issues](https://github.com/XinDi-Technology/rspress-theme-aim/issues)
2. 提交新的 Issue，描述问题和操作步骤
3. 联系项目维护者

## 📝 发布记录示例

| 版本 | 发布日期 | 发布者 | 状态 |
|------|---------|--------|------|
| v1.0.0 | 2026-03-08 | 你 | 🚀 即将发布 |
