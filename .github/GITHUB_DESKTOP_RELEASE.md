# 使用 GitHub Desktop 进行版本发布

本指南详细说明如何使用 GitHub Desktop 进行版本发布，配合自动发布工作流完成整个发布过程。

## 📋 前提准备

1. **安装 GitHub Desktop**：如果还没有安装，从 [GitHub Desktop 官网](https://desktop.github.com/) 下载并安装
2. **克隆仓库**：在 GitHub Desktop 中克隆 `rspress-theme-aim` 仓库
3. **确保在 main 分支**：切换到 main 分支

## 🔖 步骤 1：更新 CHANGELOG.md

1. **打开项目**：在 GitHub Desktop 中打开 `rspress-theme-aim` 项目
2. **编辑 CHANGELOG.md**：
   - 找到 `[Unreleased]` 部分
   - 填写本次版本的变更内容
   - 将 `[Unreleased]` 内容移动到新的版本条目下
   - 填写发布日期

   **示例**：
   ```markdown
   ## [1.2.0] - 2026-03-09

   ### Added
   - 新增功能 X

   ## [Unreleased]

   ### Added
   - TODO: 未来版本的功能
   ```

3. **提交更改**：
   - 在 GitHub Desktop 中，确认 `CHANGELOG.md` 的更改
   - 填写提交信息，如：`chore: update CHANGELOG for v1.2.0`
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
   - 输入标签名称，如：`v1.2.0`
   - 点击 **Create Tag**

4. **推送标签**：
   - 标签创建后，点击 **Push origin**
   - GitHub Desktop 会自动推送标签到 GitHub

### 方法 B：使用 GitHub 网页创建标签

如果 GitHub Desktop 中创建标签遇到问题，可以使用 GitHub 网页：

1. **打开仓库页面**：
   - 在 GitHub Desktop 中，点击 **Repository** → **View on GitHub**

2. **进入 Releases 页面**：
   - 点击 **Releases** 选项卡
   - 点击 **Draft a new release**

3. **创建发布**：
   - 输入标签名称，如：`v1.2.0`
   - 选择要标记的分支（main）
   - 填写发布说明（可以从 CHANGELOG.md 复制）
   - 点击 **Publish release**

## 🚀 步骤 3：等待自动发布

1. **查看发布状态**：
   - 打开 GitHub 仓库页面
   - 进入 **Actions** 选项卡
   - 查看 **Automatic Release** 工作流的状态

2. **验证发布**：
   - 等待工作流完成（显示 ✅）
   - 进入 **Releases** 选项卡，查看新创建的发布
   - 访问部署后的站点，验证新功能

## 📝 发布流程示意图

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ 1. 更新 CHANGELOG.md │ → │ 2. 提交并推送更改 │ → │ 3. 创建版本标签 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                    ↓
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ 6. 验证部署结果 │ ← │ 5. 自动部署站点 │ ← │ 4. 自动创建 Release │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## 🔍 常见问题

### Q: 在 GitHub Desktop 中找不到 Tags 选项卡？

A: GitHub Desktop 的标签功能在 **History** 选项卡中：
- 点击 **History** 选项卡
- 右键点击要标记的提交
- 选择 **Create Tag...**

### Q: 如何查看已创建的标签？

A: 查看标签的方法：
- **方法 1**：在 GitHub Desktop 中，点击 **Repository** → **View on GitHub**，然后进入 **Releases** 选项卡
- **方法 2**：在 GitHub Desktop 中，点击 **History** 选项卡，查看提交旁边的标签标记

### Q: 标签推送失败怎么办？

A: 检查：
- 网络连接是否正常
- 你是否有仓库的推送权限
- 标签名称是否符合格式（如 `v1.2.0`）

### Q: 自动发布工作流没有触发怎么办？

A: 检查：
- 标签是否已成功推送到 GitHub
- 标签名称是否以 `v` 开头
- GitHub Actions 是否已启用

### Q: 发布说明不完整怎么办？

A: 确保在 `CHANGELOG.md` 中为对应版本填写了完整的变更内容，自动发布工作流会从中提取发布说明。

## 📞 技术支持

如果在发布过程中遇到问题：

1. 查看项目的 [Issues](https://github.com/XinDi-Technology/rspress-theme-aim/issues)
2. 提交新的 Issue，描述问题和操作步骤
3. 联系项目维护者

## 💡 提示

- **版本号规范**：使用语义化版本（如 `v1.2.0`）
- **提交信息**：使用清晰的提交信息，便于追踪
- **CHANGELOG**：及时更新 CHANGELOG.md，保持发布说明的完整性
- **测试**：发布前确保所有功能已测试通过

使用 GitHub Desktop 发布版本更加直观和便捷，特别适合不熟悉命令行的用户！
