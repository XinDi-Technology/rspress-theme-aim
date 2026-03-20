---
order: 12
---

# 自动导航功能

Rspress Theme AIm 使用 Rspress 内置的自动导航功能，简化了文档管理流程，让你无需手动维护导航配置文件。

## 功能说明

### 传统方式 vs 自动导航

#### 传统方式
需要手动维护两个配置文件：
- `_meta.json` - 控制侧边栏显示顺序
- `_nav.json` - 控制顶部导航详情

每次添加新文档都需要：
1. 创建文档文件
2. 修改 `_meta.json` 添加新条目
3. 修改 `_nav.json` 添加导航链接

#### 自动导航方式
只需：
1. 创建文档文件并添加 `order` frontmatter

所有导航和侧边栏都会自动生成！

## 工作原理

### 1. 顶部导航
通过 `_nav.json` 配置顶级导航项，只需指定导航文本和链接：

```json
[
  {
    "text": "指南",
    "link": "/guide/"
  },
  {
    "text": "博客",
    "link": "/blog/"
  }
]
```

### 2. 侧边栏导航
Rspress 会自动扫描目录下的所有文档文件，并根据 `order` frontmatter 自动排序。

## 如何添加新文档

### 步骤 1：创建文档文件

在 `docs/zh/guide/` 目录下创建新的 Markdown 文件，例如 `new-feature.md`：

```markdown
---
order: 13
---

# 新功能说明

这里是新功能的详细说明...
```

### 步骤 2：完成！

就这么简单！新文档会自动出现在侧边栏中，位置由 `order` 值决定。

## order Frontmatter 说明

### 作用
`order` 用于控制文档在侧边栏中的显示顺序，数值越小越靠前。

### 示例
```markdown
---
order: 1
---

# 第一个文档
```

```markdown
---
order: 2
---

# 第二个文档
```

### 排序规则
- 数值越小，位置越靠前
- 相同 `order` 值的文档按文件名字母顺序排列
- 没有 `order` 的文档会排在有 `order` 的文档之后

## 最佳实践

### 1. 使用间隔的 order 值
建议使用 10、20、30 这样的间隔值，方便后续插入新文档：

```markdown
---
order: 10
---

# 基础配置
```

```markdown
---
order: 20
---

# 高级配置
```

这样如果需要在这两个文档之间插入新文档，可以使用 `order: 15`。

### 2. 保持一致性
中英文文档使用相同的 `order` 值，确保两侧边栏结构一致。

### 3. 文档命名规范
使用小写字母和连字符命名文件：
- ✅ `auto-navigation.md`
- ✅ `home-features.md`
- ❌ `AutoNavigation.md`
- ❌ `home_features.md`

## 多语言支持

### 中文文档
位置：`docs/zh/guide/`
```markdown
---
order: 12
---

# 自动导航功能
```

### 英文文档
位置：`docs/en/guide/`
```markdown
---
order: 12
---

# Auto Navigation
```

## 常见问题

### Q: 为什么我的文档没有出现在侧边栏？
A: 检查以下几点：
1. 文件是否在正确的目录下
2. 文件名是否正确（使用 `.md` 或 `.mdx` 扩展名）
3. frontmatter 格式是否正确

### Q: 如何隐藏某个文档？
A: 在 frontmatter 中添加 `hidden: true`：
```markdown
---
order: 12
hidden: true
---

# 隐藏的文档
```

### Q: 如何自定义文档标题？
A: 在 frontmatter 中添加 `title`：
```markdown
---
order: 12
title: 自定义标题
---

# 文档标题
```

## 技术细节

### 自动导航配置
在 `rspress.config.ts` 中启用自动导航：

```typescript
export default defineConfig({
  themeConfig: {
    enableContentAnimation: true,
  },
});
```

### 文件扫描规则
Rspress 会自动扫描以下目录：
- `docs/zh/` - 中文文档
- `docs/en/` - 英文文档

并根据目录结构自动生成导航和侧边栏。
