---
order: 11
---

# Upgrade Guide

This guide explains how to upgrade the template theme features and Rspress version.

## 🆙 Upgrading Template Theme Features

This template is continuously updated with new theme features (copyright information, record information, edit links, etc.).

### Quick Upgrade Steps

1. Check [Releases](https://github.com/XinDi-Technology/rspress-theme-aim/releases) to understand new version features
2. Copy the `theme/` directory to your repository (core files)
3. (Optional) Copy `docs/guide/*.md` feature documentation
4. Commit and push, wait for automatic deployment

> 💡 **Tip**：Back up your custom modifications before upgrading, especially files in the `theme/` directory.

### What's Included in Upgrades

Typical theme feature upgrades include:

- New features (e.g., copyright information, ICP record, public security record)
- Style optimizations (e.g., text color adjustments)
- Bug fixes (e.g., version release errors)
- Documentation updates

### How to Handle Configuration File Changes

Do not directly overwrite `rspress.config.ts`. Instead:
1. Check the latest configuration file of the template
2. Find newly added configuration items
3. Manually add them to your configuration file

## 🔄 Upgrading Rspress Version

This template has the following default dependency:

```
"@rspress/core": "^2.0.4"
```

This means:

- Patch updates within the same major version (2.x) will be automatically followed
- When Rspress releases 3.x, if you wish to upgrade, simply modify package.json to:

```
"@rspress/core": "^3.0.0"
```

Then commit the code and let GitHub Actions rebuild. If you encounter major version incompatibility changes, please refer to the official upgrade guide to adjust rspress.config.ts and other configurations.

## FAQ

### Q: How to check what changes have been made to the template?

A: Check the [Commits](https://github.com/XinDi-Technology/rspress-theme-aim/commits/main) page of the template repository to compare all changes after the date of your last synchronization.

### Q: Can I use features from multiple versions at the same time?

A: Yes. Theme features are modular, and you can copy only the files corresponding to the features you need.

### Q: Conflicts occurred after upgrading?

A: If you modified files in the `theme/` directory, conflicts may occur during upgrading. Suggested approach:
1. Back up your modifications
2. Copy new version files
3. Manually merge your custom modifications

### Q: What to do if configuration files have changed?

A: Do not directly overwrite `rspress.config.ts`, but:
1. Check the latest configuration file of the template
2. Find newly added configuration items
3. Manually add them to your configuration file

## Getting Help

If you encounter problems during the upgrade process:

1. Check the [Issues](https://github.com/XinDi-Technology/rspress-theme-aim/issues) of this project
2. Submit a new Issue, describing your problem and operation steps