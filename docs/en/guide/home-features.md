# Home Features

Rspress provides a built-in `HomeFeature` component that allows you to easily create feature showcases on the homepage.

## Basic Usage

Add a `features` array to the frontmatter of your homepage (`index.md`):

```yaml
---
pageType: home

features:
  - title: Feature 1
    details: Description of feature 1
    icon: 🚀
  - title: Feature 2
    details: Description of feature 2
    icon: 📦
  - title: Feature 3
    details: Description of feature 3
    icon: 🎨
---
```

## Configuration Options

| Option | Description | Type | Required |
|--------|-------------|------|----------|
| `title` | Feature title | string | Yes |
| `details` | Feature description | string | Yes |
| `icon` | Feature icon (emoji or image path) | string | No |
| `span` | Number of grid columns occupied (1-12) | number | No |
| `link` | Link address for the feature | string | No |

## Advanced Configuration

### Grid Layout Control

Use the `span` property to control the width of each feature:

```yaml
features:
  - title: Full Width Feature
    details: This feature occupies the full width
    icon: 🌍
    span: 12
  - title: Half Width Feature 1
    details: This feature occupies half the width
    icon: 🚀
    span: 6
  - title: Half Width Feature 2
    details: This feature occupies half the width
    icon: 📦
    span: 6
  - title: Third Width Feature 1
    details: This feature occupies one third of the width
    icon: 🎨
    span: 4
  - title: Third Width Feature 2
    details: This feature occupies one third of the width
    icon: 💻
    span: 4
  - title: Third Width Feature 3
    details: This feature occupies one third of the width
    icon: 🎯
    span: 4
```

### Adding Links

Use the `link` property to make features clickable:

```yaml
features:
  - title: Getting Started
    details: Learn how to get started with the template
    icon: 🚀
    span: 6
    link: /guide/getting-started/
  - title: GitHub Repository
    details: View the source code on GitHub
    icon: 💻
    span: 6
    link: https://github.com/XinDi-Technology/rspress-theme-aim
```

## Example

Here's a complete example of homepage features configuration:

```yaml
---
pageType: home

hero:
  name: AI Manufacturing · Rspress Theme AIm
  text: Zero local setup · GitHub Pages one-click deployment
  tagline: Modern documentation site you can build and maintain entirely in the browser
  actions:
    - theme: brand
      text: Guide
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/XinDi-Technology/rspress-theme-aim

features:
  - title: Quick Start
    details: Set up your documentation site in 5 minutes without local environment.
    icon: 🚀
    span: 6
    link: /guide/getting-started/
  
  - title: Feature Documentation
    details: View all feature configuration instructions.
    icon: 📖
    span: 6
    link: /guide/
  
  - title: Based on Rspress V2
    details: Enjoy high-performance builds, MDX support, full-text search, and modern capabilities.
    icon: 📦
    span: 4
  
  - title: GitHub Pages Auto Deployment
    details: Auto-build and publish on every commit.
    icon: 🎨
    span: 4
  
  - title: View Source Code
    details: Visit GitHub repository for complete code.
    icon: 💻
    span: 4
    link: https://github.com/XinDi-Technology/rspress-theme-aim
---
```

## Responsive Layout

Rspress automatically handles responsive layout:

- **Desktop** (> 960px): Display according to `span` property
- **Tablet** (≤ 960px): Automatically adjust to 2 columns
- **Mobile** (≤ 640px): Automatically adjust to 1 column

No additional configuration is needed, the system will automatically adapt to different screen sizes.

## Reference Documentation

- [Rspress HomeFeature Component Documentation](https://rspress.rs/en/ui/layout-components/home-feature)