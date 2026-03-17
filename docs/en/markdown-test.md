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

```
This is a basic code block
No syntax highlighting
```

### 6.2 Code Block with Language

```javascript
function hello() {
  console.log('Hello, World!');
}
```

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Alice',
  age: 25
};
```

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

```bash
npm install rspress
pnpm dev
```

### 6.3 Code Block Title

```ts title="example.ts"
const message = 'Hello, Rspress!';
```

### 6.4 Line Highlighting

```javascript
function calculateSum(a, b) {
  // Highlighted line
  return a + b;
}
```

---

## 7. Tables

### 7.1 Basic Table

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

### 7.2 Alignment

| Left Aligned | Center Aligned | Right Aligned |
|:------------|:-------------:|--------------:|
| Text 1      | Text 2         | Text 3        |
| Text 4      | Text 5         | Text 6        |

### 7.3 Complex Table

| Feature | Description | Example |
|---------|-------------|----------|
| **Bold** | Bold text | `**text**` |
| *Italic* | Italic text | `*text*` |
| `Code` | Inline code | `` `code` `` |

---

## 8. Horizontal Rules

Horizontal rules are used to create visual separation in documents, you can use three different character combinations:

### 8.1 Short Line

Use three or more `---`:

---

### 8.2 Asterisks

Use three or more `***`:

***

### 8.3 Underscores

Use three or more `___`:

___

**Note**: The three writing styles above render the same as a horizontal line, but the source code is different.

---

## 9. Footnotes

This is a paragraph with a footnote[^1].

Footnotes can be placed anywhere in the document[^2].

[^1]: This is the description of the first footnote
[^2]: This is the description of the second footnote, can contain **formatted** text.

---

## 10. GitHub Markdown Alerts

### 10.1 Note

> [!NOTE]
> Useful information that users should know, but is not mandatory.

### 10.2 Tip

> [!TIP]
> Helpful suggestions for optimizing or simplifying operations.

### 10.3 Important

> [!IMPORTANT]
> Critical information that users must pay attention to.

### 10.4 Warning

> [!WARNING]
> Warning information, indicating potential issues or risks.

### 10.5 Caution

> [!CAUTION]
> Dangerous operations that may cause data loss or security risks.

---

## 11. Emoji

😀 😃 😄 😁 😆 🤣 😂

👍 👎 👏 👋 🙏 💪

💻 🖥️ 💾 💿 📱

---

## 12. Mathematical Formulas (if supported)

Inline formula: $E = mc^2$

Block formula:

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

---

## 13. Special Characters

&copy; &reg; &trade; &euro; &pound; &yen;

&hearts; &spades; &diams; &clubs;

---

## 14. Indentation and Spaces

    Indent 4 spaces
    Will display as code block

    Second line indented

---

## 15. Performance Testing

### 15.1 Large Text Test

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### 15.2 Large Code Test

```javascript
// Large code test
function complexFunction() {
  const data = [];
  for (let i = 0; i < 1000; i++) {
    data.push({
      id: i,
      name: `Item ${i}`,
      value: Math.random() * 100,
      timestamp: new Date().toISOString()
    });
  }
  
  return data.filter(item => item.value > 50)
    .map(item => ({
      ...item,
      formatted: item.value.toFixed(2)
    }))
    .sort((a, b) => b.value - a.value);
}

async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

---

## Summary

This document covers the following syntax types:

1. ✅ Headings (levels 1-6)
2. ✅ Text formatting (bold, italic, strikethrough, etc.)
3. ✅ Lists (unordered, ordered, task lists)
4. ✅ Links and images
5. ✅ Blockquotes (support nesting)
6. ✅ Code blocks (with syntax highlighting)
7. ✅ Tables (with alignment)
8. ✅ Horizontal rules
9. ✅ Footnotes
10. ✅ GitHub Markdown Alerts
11. ✅ Emoji
12. ✅ Mathematical formulas (if supported)
13. ✅ Special characters
14. ✅ Indentation and spaces
15. ✅ Performance testing

If you need to add more test cases, please edit this document.