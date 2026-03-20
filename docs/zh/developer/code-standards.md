---
order: 1
---

# 代码规范配置说明

本文档详细说明项目的代码规范配置，包括 EditorConfig、Prettier、ESLint 等工具的作用和使用方法。

## 📚 配置文件概览

项目使用以下配置文件来保证代码质量和一致性：

| 文件 | 作用 | 类型 |
|------|------|------|
| `.editorconfig` | 编辑器基础配置 | 编辑器设置 |
| `.prettierrc` | 代码格式化配置 | 代码格式 |
| `.eslintrc.js` | 代码质量检查配置 | 代码质量 |
| `.prettierignore` | Prettier 忽略文件 | 忽略配置 |
| `.eslintignore` | ESLint 忽略文件 | 忽略配置 |

---

## 1. EditorConfig - 编辑器基础配置

### 🎯 作用

- **跨编辑器统一编码风格**
- 不依赖任何工具，编辑器原生支持
- 所有开发者使用相同的编辑器设置

### 📋 配置内容

```ini
# EditorConfig - 跨编辑器统一编码风格
# https://editorconfig.org

root = true

[*]
charset = utf-8                    # UTF-8 编码
indent_style = space               # 使用空格缩进
indent_size = 2                    # 缩进大小为 2
end_of_line = lf                   # 使用 LF 换行符
insert_final_newline = true        # 文件末尾插入空行
trim_trailing_whitespace = true    # 删除行尾空格

[*.md]
trim_trailing_whitespace = false   # Markdown 文件不删除行尾空格

[*.{yml,yaml}]
indent_size = 2                    # YAML 文件缩进为 2

[Makefile]
indent_style = tab                 # Makefile 使用 tab 缩进
```

### 💡 何时生效

- **打开文件时** - 编辑器自动应用这些设置
- **新建文件时** - 编辑器自动使用这些设置
- **保存文件时** - 自动格式化（如果编辑器支持）

### 🔍 支持的编辑器

- VS Code（内置支持）
- WebStorm（内置支持）
- Sublime Text（需要插件）
- Vim（需要插件）
- 等等...

---

## 2. Prettier - 代码格式化配置

### 🎯 作用

- **自动格式化代码**
- 统一代码风格
- 减少代码审查中的格式争议

### 📋 配置内容

```json
{
  "semi": false,                    // 不使用分号
  "singleQuote": true,              // 使用单引号
  "tabWidth": 2,                    // 缩进为 2 空格
  "trailingComma": "es5",           // ES5 兼容的尾随逗号
  "printWidth": 100,                // 每行最大 100 字符
  "bracketSpacing": true,           // 对象字面量大括号内空格
  "arrowParens": "avoid",           // 箭头函数参数省略括号
  "endOfLine": "lf",                // 使用 LF 换行符
  "jsxSingleQuote": false,          // JSX 使用双引号
  "quoteProps": "as-needed",        // 对象属性引号按需添加
  "proseWrap": "preserve"           // 保持 Markdown 换行
}
```

### 💡 使用方法

```bash
# 格式化代码
pnpm format

# 检查代码格式
pnpm format:check
```

### 🔍 格式化示例

**格式化前：**
```javascript
const obj = {name:"John",age:30};
function test(a,b){return a+b}
```

**格式化后：**
```javascript
const obj = { name: 'John', age: 30 }
function test(a, b) {
  return a + b
}
```

---

## 3. ESLint - 代码质量检查配置

### 🎯 作用

- **检查代码质量问题**
- 发现潜在错误
- 强制执行最佳实践
- 与 Prettier 配合，避免冲突

### 📋 配置内容

```javascript
module.exports = {
  root: true,                       // 根配置文件
  env: {
    browser: true,                  // 浏览器环境
    es2021: true,                   // ES2021 语法
    node: true,                     // Node.js 环境
  },
  extends: [
    'eslint:recommended',           // ESLint 推荐规则
    'plugin:@typescript-eslint/recommended',  // TypeScript 推荐规则
    'plugin:react/recommended',     // React 推荐规则
    'plugin:react-hooks/recommended', // React Hooks 推荐规则
    'prettier',                     // 禁用与 Prettier 冲突的规则
  ],
  parser: '@typescript-eslint/parser', // TypeScript 解析器
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',  // React 17+ 不需要导入 React
    'react/prop-types': 'off',          // 使用 TypeScript，不需要 prop-types
    '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 any
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }], // 警告 console.log
    'prefer-const': 'error',        // 优先使用 const
    'no-var': 'error',              // 禁止使用 var
  },
}
```

### 💡 使用方法

```bash
# 检查代码问题
pnpm lint

# 自动修复问题
pnpm lint:fix
```

### 🔍 检查示例

**有问题的代码：**
```javascript
var name = 'John'           // ❌ 使用 var
console.log(name)           // ⚠️ 使用 console.log
const unused = 1            // ❌ 未使用的变量
let x = 1                   // ❌ 应该使用 const
```

**修复后的代码：**
```javascript
const name = 'John'         // ✅ 使用 const
// console.log(name)        // ✅ 移除或使用 console.warn
// const unused = 1         // ✅ 移除未使用的变量
const x = 1                 // ✅ 使用 const
```

---

## 4. 忽略文件

### .prettierignore

```
node_modules      # 依赖目录
doc_build         # 构建产物
dist              # 构建产物
build             # 构建产物
*.min.js          # 压缩文件
*.min.css         # 压缩文件
pnpm-lock.yaml    # 锁文件
```

### .eslintignore

```
node_modules      # 依赖目录
doc_build         # 构建产物
dist              # 构建产物
build             # 构建产物
*.min.js          # 压缩文件
pnpm-lock.yaml    # 锁文件
```

### 💡 为什么需要忽略文件

- **构建产物** - 不应该修改或检查
- **压缩文件** - 已经优化过
- **锁文件** - 自动生成，不应修改

---

## 🔄 三者之间的关系

### 工作流程

```
1. 编辑器打开文件
   ↓
   .editorconfig 生效（编辑器设置）

2. 编写代码
   ↓
   手动/自动格式化
   ↓
   .prettierrc 生效（代码格式）

3. 保存文件
   ↓
   手动/自动检查
   ↓
   .eslintrc.js 生效（代码质量）
```

### 职责分工

| 工具 | 职责 | 关注点 | 示例 |
|------|------|--------|------|
| **EditorConfig** | 编辑器设置 | 基础编码风格 | 缩进、换行符、编码 |
| **Prettier** | 代码格式化 | 代码外观 | 引号、分号、空格 |
| **ESLint** | 代码质量检查 | 代码逻辑 | 未使用变量、最佳实践 |

### 配合使用

#### ✅ 正确的配置顺序

```javascript
// .eslintrc.js
extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'prettier',  // ← 必须放在最后
],
```

#### 💡 为什么 `prettier` 要放在最后

- 禁用与 Prettier 冲突的 ESLint 规则
- 让 Prettier 负责格式化
- 让 ESLint 负责代码质量

---

## 🎯 实际使用场景

### 场景 1：新建文件

```
1. 编辑器应用 .editorconfig 设置
2. 编写代码
3. 保存时 Prettier 自动格式化
4. ESLint 检查代码质量
```

### 场景 2：格式化现有代码

```bash
# 1. 格式化代码
pnpm format

# 2. 检查并修复代码问题
pnpm lint:fix

# 3. 提交代码
git add .
git commit -m "style: 格式化代码"
```

### 场景 3：CI/CD 检查

```yaml
# .github/workflows/ci.yml
- name: Check code format
  run: pnpm format:check

- name: Lint code
  run: pnpm lint
```

---

## 📊 总结对比

| 文件 | 类型 | 作用 | 何时生效 | 是否需要安装 |
|------|------|------|---------|------------|
| **.editorconfig** | 配置 | 编辑器设置 | 打开文件时 | ❌ 编辑器内置 |
| **.prettierrc** | 配置 | 代码格式化 | 运行 format 时 | ✅ 需要安装 |
| **.eslintrc.js** | 配置 | 代码质量检查 | 运行 lint 时 | ✅ 需要安装 |
| **.prettierignore** | 忽略 | Prettier 忽略 | 运行 format 时 | ❌ 不需要 |
| **.eslintignore** | 忽略 | ESLint 忽略 | 运行 lint 时 | ❌ 不需要 |

---

## 💡 最佳实践

### 1. 编辑器配置

在 VS Code 中安装：
- EditorConfig for VS Code
- Prettier - Code formatter
- ESLint

### 2. 自动格式化

在 `.vscode/settings.json` 中配置：
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

### 3. 提交前检查

使用 Husky + lint-staged：
```bash
# 安装
pnpm add -D husky lint-staged

# 配置 package.json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{json,css,md}": ["prettier --write"]
  }
}
```

---

## 🔗 相关链接

- [EditorConfig 官方文档](https://editorconfig.org/)
- [Prettier 官方文档](https://prettier.io/)
- [ESLint 官方文档](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
