# 版本发布说明模板

## 版本号：vX.Y.Z

### 发布日期
YYYY-MM-DD

### 更新内容

#### ✨ 新功能
- 功能1：描述
- 功能2：描述

#### 🐛 修复
- 修复1：描述
- 修复2：描述

#### 📚 文档
- 文档更新1：描述
- 文档更新2：描述

### 升级指南

#### 需要更新的文件

| 文件/目录 | 变更类型 | 说明 |
|----------|---------|------|
| `theme/index.tsx` | 修改 | 新增 XX 组件 |
| `theme/styles/index.css` | 修改 | 新增 XX 样式 |
| `docs/guide/xx.md` | 新增 | 新功能文档 |

#### 升级步骤

1. 复制 `theme/` 目录到你的仓库
2. （可选）复制 `docs/guide/xx.md` 文档
3. 提交并推送更改

#### 破坏性变更

> 如果有破坏性变更，在此说明用户需要做的额外操作

### 完整变更列表

- PR #1: 描述
- PR #2: 描述

### 兼容性

- Rspress 版本：>= 2.0.4
- Node.js 版本：>= 20.0.0

---

## 历史版本

### v1.0.0 (2026-03-08)

#### ✨ 新功能
- 初始版本发布
- 版权信息底部显示功能（支持自定义公司名称、URL、起始年份）
- ICP 备案信息支持（支持自定义备案号）
- 公安联网备案信息支持（支持自定义备案号，自动显示公安图标）
- "Edit this page" 编辑此页功能（支持自定义 GitHub 仓库链接）
- "Last Updated" 最后更新时间功能（基于 Git 历史）
- 完整的升级指南文档
- 自动发布工作流（GitHub Actions）
- GitHub Desktop 发布指南
- 版本发布流程指南

#### 升级文件
- `theme/` 目录（所有主题文件）
- `docs/guide/` 目录（功能说明文档）
- `docs/public/gongan-beian.png`（公安备案图标）

#### 配置要求
在 `rspress.config.ts` 的 `themeConfig` 中添加以下配置：

```typescript
themeConfig: {
  // 版权信息配置
  startYear: 2025,
  
  // ICP备案配置
  icpNumber: '',  // 例如：京ICP备12345678号
  
  // 公安联网备案配置
  gonganNumber: '',  // 例如：鲁公网安备12345678912345号
  
  // 编辑此页链接配置
  editLink: {
    docRepoBaseUrl: 'https://github.com/<你的用户名>/<你的仓库名>/tree/main/docs',
  },
  
  // 最后更新时间配置
  lastUpdated: true,  // 显示文档最后更新时间
}
```
