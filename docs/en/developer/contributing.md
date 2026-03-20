---
order: 2
---

# Contributing Guide

Thank you for considering contributing to Rspress Theme AIm!

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Process](#development-process)
- [Commit Guidelines](#commit-guidelines)
- [Code Standards](#code-standards)
- [Documentation Standards](#documentation-standards)

---

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- The use of sexualized language or imagery and unwelcome sexual attention or advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

---

## How to Contribute

### Reporting Bugs

Before submitting a bug report, please:
1. Check the [Issues](https://github.com/XinDi-Technology/rspress-theme-aim/issues) to see if the problem has already been reported
2. Confirm you are using the latest version
3. Read the relevant documentation to confirm it's not a usage issue

When submitting a bug report, please include:
- **Clear title and description**
- **Steps to reproduce** - Detailed steps for us to reproduce the problem
- **Expected behavior** - What you expected to happen
- **Actual behavior** - What actually happened
- **Environment information** - OS, browser version, Node.js version, etc.
- **Screenshots** - If applicable, add screenshots to help explain the problem
- **Code example** - Provide a minimal reproducible code example

#### Bug Report Template

```markdown
## Bug Description
[A clear and concise description of the bug]

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
[Describe what you expected to happen]

## Actual Behavior
[Describe what actually happened]

## Screenshots
[If applicable, add screenshots]

## Environment
- OS: [e.g. Windows 10, macOS 11.2]
- Browser: [e.g. Chrome 90, Firefox 88]
- Node.js: [e.g. 16.14.0]
- Rspress: [e.g. 2.0.6]

## Additional Context
[Add any other context about the problem here]
```

### Suggesting New Features

We welcome new feature suggestions! Please describe in detail in an Issue:
- **Feature description** - Clearly describe the feature you want
- **Use case** - Why this feature is needed
- **Implementation suggestions** - If you have ideas, provide implementation suggestions
- **Alternatives** - Other alternatives you've considered

#### Feature Request Template

```markdown
## Feature Description
[A clear and concise description of the feature you want]

## Use Case
[Describe why this feature is needed, what problem it solves]

## Expected Behavior
[Describe how this feature should work]

## Alternatives Considered
[Describe other alternatives you've considered]

## Additional Context
[Add any other relevant information or screenshots]
```

### Improving Documentation

Documentation improvements include:
- Fixing spelling or grammar errors
- Adding missing documentation
- Improving clarity of existing documentation
- Adding more examples
- Translating documentation

---

## Development Process

### 1. Fork and Clone the Repository

```bash
# Clone your fork after forking
git clone https://github.com/<your-username>/rspress-theme-aim.git
cd rspress-theme-aim

# Add upstream repository
git remote add upstream https://github.com/XinDi-Technology/rspress-theme-aim.git

# Install dependencies
pnpm install
```

### 2. Create a Branch

```bash
# Create a new branch from main
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation improvements
- `refactor/` - Code refactoring
- `test/` - Test related
- `chore/` - Other miscellaneous

### 3. Make Your Changes

```bash
# Start development server
pnpm dev

# Open http://localhost:3000/rspress-theme-aim/ in your browser
```

### 4. Test Your Changes

Ensure:
- ✅ Code compiles correctly (`pnpm build`)
- ✅ Local preview works (`pnpm preview`)
- ✅ Multi-language functionality works (Chinese/English)
- ✅ Documentation is complete

### 5. Commit Your Changes

```bash
# Check changes
git status
git diff

# Add changes
git add .

# Commit (follow commit guidelines)
git commit -m "feat: add new feature description"
# or
git commit -m "fix: fix some bug"
```

### 6. Push and Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

---

## Commit Guidelines

We use the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes that don't affect functionality
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or modifying tests
- `chore` - Build process or auxiliary tool changes
- `ci` - CI configuration changes
- `revert` - Revert previous commit

### Scope (Optional)

- `blog` - Blog feature related
- `copyright` - Copyright information related
- `icp` - ICP filing related
- `gongan` - Public security filing related
- `nav` - Navigation related
- `config` - Configuration related
- `deps` - Dependencies related

### Examples

```bash
# New feature
feat(blog): add blog post tag feature

# Bug fix
fix(copyright): fix company name display error

# Documentation
docs: update installation instructions in README.md

# Refactoring
refactor(nav): simplify navigation configuration logic

# Performance optimization
perf(blog): optimize blog post list loading speed

# Dependency update
chore(deps): upgrade @rspress/core to 2.0.6
```

---

## Code Standards

### TypeScript

- Write code in TypeScript
- Add type annotations to all functions
- Avoid using `any` type
- Use interfaces to define data structures

### React

- Use functional components and Hooks
- Use PascalCase for component naming
- Use `handle` prefix for event handlers
- Use interfaces to define Props

### Code Style

- Use 2 space indentation
- Use single quotes
- No semicolons at end of statements
- Maximum line length 100 characters

### File Naming

- Component files: PascalCase (e.g., `CopyrightFooter.tsx`)
- Utility files: kebab-case (e.g., `format-date.ts`)
- Style files: kebab-case (e.g., `blog.css`)

---

## Documentation Standards

### Markdown Documents

- Use both Chinese and English
- Add `order` frontmatter at the beginning of documents
- Clear heading hierarchy (H1 > H2 > H3)
- Specify language type for code blocks
- Use relative paths for internal document links

### Document Structure

```markdown
---
order: 1
---

# Title

Brief description...

## Feature Description

Detailed description...

## Usage

### Step 1

### Step 2

## Examples

\`\`\`typescript
// Code example
\`\`\`

## FAQ

### Q: Question 1
A: Answer 1

## Related Links

- [Link 1](url)
- [Link 2](url)
```

### Multi-language Documentation

- Chinese documents in `docs/zh/`
- English documents in `docs/en/`
- Keep Chinese and English document structure consistent
- Use the same `order` value

---

## Pull Request Guidelines

### PR Title

Follow commit guidelines:
```
feat: add new feature
fix: fix some bug
docs: update documentation
```

### PR Description Template

```markdown
## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Description
[Clearly describe your changes]

## Related Issue
Fixes #(issue number)

## Testing
- [ ] Local testing passed
- [ ] Multi-language testing passed
- [ ] Build testing passed

## Screenshots
[If applicable, add screenshots]

## Checklist
- [ ] Code follows project code standards
- [ ] Self-review completed
- [ ] Necessary comments added
- [ ] Documentation updated
- [ ] No new warnings introduced
- [ ] Tests added to prove fix is effective or feature works
- [ ] New and existing unit tests pass
```

### PR Review Process

1. **Automated checks** - CI automatically runs build tests
2. **Code review** - Maintainers will review your code
3. **Feedback changes** - Make necessary changes based on feedback
4. **Merge** - After approval, merge to main branch

---

## Getting Help

If you encounter problems while contributing:

- 📖 Check the [Documentation](https://xindi-technology.github.io/rspress-theme-aim/)
- 💬 Ask in [Discussions](https://github.com/XinDi-Technology/rspress-theme-aim/discussions)
- 🐛 Search or ask in [Issues](https://github.com/XinDi-Technology/rspress-theme-aim/issues)

---

## License

By contributing code, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you again for your contribution! 🎉
