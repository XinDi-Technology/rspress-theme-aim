---
order: 1
---

# Code Standards Configuration

This document details the project's code standard configurations, including the purpose and usage of tools like EditorConfig, Prettier, and ESLint.

## 📚 Configuration Files Overview

The project uses the following configuration files to ensure code quality and consistency:

| File | Purpose | Type |
|------|---------|------|
| `.editorconfig` | Editor basic configuration | Editor settings |
| `.prettierrc` | Code formatting configuration | Code format |
| `.eslintrc.js` | Code quality check configuration | Code quality |
| `.prettierignore` | Prettier ignore file | Ignore configuration |
| `.eslintignore` | ESLint ignore file | Ignore configuration |

---

## 1. EditorConfig - Editor Basic Configuration

### 🎯 Purpose

- **Cross-editor unified coding style**
- Native editor support without any tools
- All developers use the same editor settings

### 📋 Configuration Content

```ini
# EditorConfig - Cross-editor unified coding style
# https://editorconfig.org

root = true

[*]
charset = utf-8                    # UTF-8 encoding
indent_style = space               # Use space indentation
indent_size = 2                    # Indentation size is 2
end_of_line = lf                   # Use LF line ending
insert_final_newline = true        # Insert newline at end of file
trim_trailing_whitespace = true    # Remove trailing whitespace

[*.md]
trim_trailing_whitespace = false   # Don't remove trailing whitespace in Markdown

[*.{yml,yaml}]
indent_size = 2                    # YAML file indentation is 2

[Makefile]
indent_style = tab                 # Makefile uses tab indentation
```

### 💡 When It Takes Effect

- **When opening a file** - Editor automatically applies these settings
- **When creating a new file** - Editor automatically uses these settings
- **When saving a file** - Auto-formatting (if editor supports it)

### 🔍 Supported Editors

- VS Code (built-in support)
- WebStorm (built-in support)
- Sublime Text (plugin required)
- Vim (plugin required)
- And more...

---

## 2. Prettier - Code Formatting Configuration

### 🎯 Purpose

- **Automatically format code**
- Unified code style
- Reduce formatting disputes in code reviews

### 📋 Configuration Content

```json
{
  "semi": false,                    // No semicolons
  "singleQuote": true,              // Use single quotes
  "tabWidth": 2,                    // Indentation is 2 spaces
  "trailingComma": "es5",           // ES5 compatible trailing commas
  "printWidth": 100,                // Max 100 characters per line
  "bracketSpacing": true,           // Spaces inside object literals
  "arrowParens": "avoid",           // Omit parentheses for arrow functions
  "endOfLine": "lf",                // Use LF line ending
  "jsxSingleQuote": false,          // JSX uses double quotes
  "quoteProps": "as-needed",        // Object property quotes as needed
  "proseWrap": "preserve"           // Preserve Markdown line breaks
}
```

### 💡 Usage

```bash
# Format code
pnpm format

# Check code format
pnpm format:check
```

### 🔍 Formatting Example

**Before formatting:**
```javascript
const obj = {name:"John",age:30};
function test(a,b){return a+b}
```

**After formatting:**
```javascript
const obj = { name: 'John', age: 30 }
function test(a, b) {
  return a + b
}
```

---

## 3. ESLint - Code Quality Check Configuration

### 🎯 Purpose

- **Check code quality issues**
- Find potential errors
- Enforce best practices
- Work with Prettier to avoid conflicts

### 📋 Configuration Content

```javascript
module.exports = {
  root: true,                       // Root configuration file
  env: {
    browser: true,                  // Browser environment
    es2021: true,                   // ES2021 syntax
    node: true,                     // Node.js environment
  },
  extends: [
    'eslint:recommended',           // ESLint recommended rules
    'plugin:@typescript-eslint/recommended',  // TypeScript recommended rules
    'plugin:react/recommended',     // React recommended rules
    'plugin:react-hooks/recommended', // React Hooks recommended rules
    'prettier',                     // Disable rules that conflict with Prettier
  ],
  parser: '@typescript-eslint/parser', // TypeScript parser
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',  // React 17+ doesn't need to import React
    'react/prop-types': 'off',          // Using TypeScript, no need for prop-types
    '@typescript-eslint/no-explicit-any': 'warn', // Warn on using any
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Warn on console.log
    'prefer-const': 'error',        // Prefer const
    'no-var': 'error',              // Disallow var
  },
}
```

### 💡 Usage

```bash
# Check code issues
pnpm lint

# Auto-fix issues
pnpm lint:fix
```

### 🔍 Check Example

**Problematic code:**
```javascript
var name = 'John'           // ❌ Using var
console.log(name)           // ⚠️ Using console.log
const unused = 1            // ❌ Unused variable
let x = 1                   // ❌ Should use const
```

**Fixed code:**
```javascript
const name = 'John'         // ✅ Using const
// console.log(name)        // ✅ Removed or use console.warn
// const unused = 1         // ✅ Removed unused variable
const x = 1                 // ✅ Using const
```

---

## 4. Ignore Files

### .prettierignore

```
node_modules      # Dependencies directory
doc_build         # Build output
dist              # Build output
build             # Build output
*.min.js          # Minified files
*.min.css         # Minified files
pnpm-lock.yaml    # Lock file
```

### .eslintignore

```
node_modules      # Dependencies directory
doc_build         # Build output
dist              # Build output
build             # Build output
*.min.js          # Minified files
pnpm-lock.yaml    # Lock file
```

### 💡 Why Ignore Files Are Needed

- **Build output** - Should not be modified or checked
- **Minified files** - Already optimized
- **Lock files** - Auto-generated, should not be modified

---

## 🔄 Relationship Between the Three

### Workflow

```
1. Editor opens file
   ↓
   .editorconfig takes effect (editor settings)

2. Write code
   ↓
   Manual/auto formatting
   ↓
   .prettierrc takes effect (code format)

3. Save file
   ↓
   Manual/auto check
   ↓
   .eslintrc.js takes effect (code quality)
```

### Division of Responsibilities

| Tool | Responsibility | Focus | Example |
|------|---------------|-------|---------|
| **EditorConfig** | Editor settings | Basic coding style | Indentation, line ending, encoding |
| **Prettier** | Code formatting | Code appearance | Quotes, semicolons, spaces |
| **ESLint** | Code quality check | Code logic | Unused variables, best practices |

### Working Together

#### ✅ Correct Configuration Order

```javascript
// .eslintrc.js
extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'prettier',  // ← Must be last
],
```

#### 💡 Why `prettier` Should Be Last

- Disables ESLint rules that conflict with Prettier
- Let Prettier handle formatting
- Let ESLint handle code quality

---

## 🎯 Practical Use Cases

### Case 1: Creating New File

```
1. Editor applies .editorconfig settings
2. Write code
3. Prettier auto-formats on save
4. ESLint checks code quality
```

### Case 2: Formatting Existing Code

```bash
# 1. Format code
pnpm format

# 2. Check and fix code issues
pnpm lint:fix

# 3. Commit code
git add .
git commit -m "style: format code"
```

### Case 3: CI/CD Check

```yaml
# .github/workflows/ci.yml
- name: Check code format
  run: pnpm format:check

- name: Lint code
  run: pnpm lint
```

---

## 📊 Summary Comparison

| File | Type | Purpose | When It Takes Effect | Needs Installation |
|------|------|---------|---------------------|-------------------|
| **.editorconfig** | Configuration | Editor settings | When opening file | ❌ Built-in to editor |
| **.prettierrc** | Configuration | Code formatting | When running format | ✅ Needs installation |
| **.eslintrc.js** | Configuration | Code quality check | When running lint | ✅ Needs installation |
| **.prettierignore** | Ignore | Prettier ignore | When running format | ❌ Not needed |
| **.eslintignore** | Ignore | ESLint ignore | When running lint | ❌ Not needed |

---

## 💡 Best Practices

### 1. Editor Configuration

Install in VS Code:
- EditorConfig for VS Code
- Prettier - Code formatter
- ESLint

### 2. Auto-formatting

Configure in `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

### 3. Pre-commit Check

Use Husky + lint-staged:
```bash
# Install
pnpm add -D husky lint-staged

# Configure in package.json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{json,css,md}": ["prettier --write"]
  }
}
```

---

## 🔗 Related Links

- [EditorConfig Official Documentation](https://editorconfig.org/)
- [Prettier Official Documentation](https://prettier.io/)
- [ESLint Official Documentation](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
