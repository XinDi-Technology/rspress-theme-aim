# Markdown Syntax Test

This document is used to test and demonstrate Markdown syntax supported by this project.

## 1. Headings

### 1.1 Different Levels

# Level 1 Heading
## Level 2 Heading
### Level 3 Heading
#### Level 4 Heading
##### Level 5 Heading
###### Level 6 Heading

---

## 2. Text Formatting

### 2.1 Emphasis

**Bold text**
*Italic text*
***Bold and italic text***
~~Strikethrough text~~

### 2.2 Inline Code

Use `inline code` to mark code snippets.

### 2.3 Escape Characters

\*Not italic\*
\[Not a link\]

---

## 3. Lists

### 3.1 Unordered List

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### 3.2 Ordered List

1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item

### 3.3 Task List

- [x] Completed task
- [ ] Uncompleted task
- [x] Another completed task

---

## 4. Links and Images

### 4.1 Links

[Normal link](https://example.com)

[Link with title](https://example.com "This is a title")

[Relative path link](/guide/index)

### 4.2 Image with Title

![Image with title](/rspress-icon.png "Image title")

### 4.3 Image with Link

[![Image link](/rspress-icon.png)](https://example.com)

---

## 5. Blockquotes

### 5.1 Normal Blockquote

> This is a blockquote text.
> It can span multiple lines.

### 5.2 Nested Blockquote

> First level quote
>
>> Second level quote
>>
>>> Third level quote

### 5.3 Blockquote with Elements

> Blockquotes can contain **bold text**, `code`, and [links](https://xindi-technology.github.io/rspress-theme-aim/).

---

## 6. Code Blocks

### 6.1 Basic Code Block

```javascript
function hello() {
  console.log('Hello, world!');
}
```

### 6.2 Code Block with Language

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 30
};
```

---

## 7. Tables

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

---

## 8. Horizontal Rules

---

---

---

---

## 9. Mathematical Formulas

### 9.1 Inline Formulas

E = mc^2

### 9.2 Block Formulas

$$
\int_{a}^{b} f(x) dx
$$

---

## 10. Alert Boxes

> [!NOTE]
> This is a note

> [!TIP]
> This is a tip

> [!WARNING]
> This is a warning

> [!CAUTION]
> This is a caution

---

## 11. Code Blocks with Line Numbers

```typescript
// Line 1: Import statement
import React from 'react';

// Line 3: Component definition
const App = () => {
  // Line 5: Return statement
  return <div>Hello World</div>;
};

export default App;
```

---

## 12. Definition Lists

Term 1
: Definition for term 1

Term 2
: Definition for term 2
: Another definition for term 2

---

## 13. Footnotes

Here is a footnote reference[^1].

[^1]: This is the footnote content.

---

## 14. Table of Contents

[[toc]]

---

## 15. Auto Link

https://example.com

---

## 16. Reference Link

[Google][google]

[google]: https://google.com

---

## 17. Emoji

🎉 🚀 💡

---

## 18. Keyboard Shortcuts

++ctrl+alt+delete++

---

## 19. Definition Lists

Term 1
: Definition for term 1

Term 2
: Definition for term 2
: Another definition for term 2

---

## 20. Timestamp

> [!TIP]
> Current date: 2024-01-01

---

## 21. Color Block

<div style="color: red;">This is red text</div>

---

## 22. Details/Summary

<details>
  <summary>Click to expand</summary>
  <p>This is hidden content that can be expanded.</p>
</details>

---

## 23. Audio/Video

### 23.1 Audio

<audio controls>
  <source src="/audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

### 23.2 Video

<video controls width="250">
  <source src="/video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 24. Mixed Content

### 24.1 Code and Text

Use `console.log()` to print messages, then use **bold** to emphasize important points.

### 24.2 Lists and Links

- [Rspress](https://rspress.rs/)
- [GitHub](https://github.com/)
- [Markdown Guide](https://www.markdownguide.org/)