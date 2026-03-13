# Markdown 语法测试

本文档用于测试和展示本项目支持的 Markdown 语法。

## 1. 标题

### 1.1 各级标题

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

---

## 2. 文本格式

### 2.1 强调

**粗体文本**
*斜体文本*
***粗斜体文本***
~~删除线文本~~

### 2.2 行内代码

使用 `行内代码` 标记代码片段。

### 2.3 转义字符

\*不是斜体\*
\[不是链接\]

---

## 3. 列表

### 3.1 无序列表

- 项目一
- 项目二
  - 子项目 2.1
  - 子项目 2.2
- 项目三

### 3.2 有序列表

1. 第一项
2. 第二项
   1. 子项 2.1
   2. 子项 2.2
3. 第三项

### 3.3 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [x] 另一个已完成任务

---

## 4. 链接和图片

### 4.1 链接

[普通链接](https://example.com)

[带标题的链接](https://example.com "这是标题")

[相对路径链接](/guide/index)

### 4.2 图片---包含图片标题

![带标题的图片](/rspress-icon.png "图片标题")

### 4.3 图片---包含链接

[![图片链接](/rspress-icon.png)](https://example.com)

---

## 5. 引用

### 5.1 普通引用

> 这是一段引用文本。
> 可以有多行。

### 5.2 嵌套引用

> 第一层引用
>
> > 第二层引用
> >
> > > 第三层引用

### 5.3 引用中包含其他元素

> 引用中可以包含 **粗体**、`代码` 和 [链接](https://xindi-technology.github.io/rspress-theme-aim/)。

---

## 6. 代码块

### 6.1 普通代码块

```
这是一段普通代码块
没有语法高亮
```

### 6.2 带语言标识的代码块

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

### 6.3 代码块标题

```ts title="example.ts"
const message = 'Hello, Rspress!';
```

### 6.4 行高亮

```javascript
function calculateSum(a, b) {
  // 高亮显示的行
  return a + b;
}
```

---

## 7. 表格

### 7.1 基础表格

| 列1 | 列2 | 列3 |
|------|------|------|
| 数据1 | 数据2 | 数据3 |
| 数据4 | 数据5 | 数据6 |

### 7.2 对齐方式

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:--------:|-------:|
| 文本1 | 文本2 | 文本3 |
| 文本4 | 文本5 | 文本6 |

### 7.3 复杂表格

| 功能 | 描述 | 示例 |
|------|------|------|
| **粗体** | 加粗文本 | `**文本**` |
| *斜体* | 倾斜文本 | `*文本*` |
| `代码` | 行内代码 | `` `代码` `` |

---

## 8. 分隔线

分隔线用于在文档中创建视觉分隔，可以使用以下三种不同的字符组合：

### 8.1 短横线

使用三个或更多`---`：

---

### 8.2 星号

使用三个或更多`***`：

***

### 8.3 下划线

使用三个或更多`___`：

___

**说明**：以上三种写法在渲染后效果相同，都是一条横线，但源码写法不同。

---

## 9. 脚注

这是一段包含脚注的文本[^1]。

脚注可以放在文档的任何位置[^2]。

[^1]: 这是第一个脚注的说明
[^2]: 这是第二个脚注的说明，可以包含**格式化**文本。

---

## 10. GitHub Markdown Alerts

### 10.1 Note

> [!NOTE]
> 有用的信息，用户应该知道，但不是必须的。

### 10.2 Tip

> [!TIP]
> 有帮助的建议，用于优化或简化操作。

### 10.3 Important

> [!IMPORTANT]
> 关键信息，用户必须注意。

### 10.4 Warning

> [!WARNING]
> 警告信息，提示潜在问题或风险。

### 10.5 Caution

> [!CAUTION]
> 危险操作，可能导致数据丢失或安全风险。

---

## 11. Emoji

😀 😃 😄 😁 😆 😅 🤣 😂

👍 👎 👏 👋 🙏 💪

💻 🖥️ 💾 💿 📱

---

## 12. 数学公式（如果支持）

行内公式：$E = mc^2$

块级公式：

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

---

## 13. 特殊字符

&copy; &reg; &trade; &euro; &pound; &yen;

&hearts; &spades; &diams; &clubs;

---

## 14. 缩进和空格

    缩进 4 个空格
    会显示为代码块

    第二行缩进

---

## 15. 性能测试

### 15.1 大量文本测试

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### 15.2 大量代码测试

```javascript
// 大量代码测试
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

## 总结

本文档涵盖了以下语法类型：

1. ✅ 标题（1-6 级）
2. ✅ 文本格式（粗体、斜体、删除线等）
3. ✅ 列表（无序、有序、任务列表）
4. ✅ 链接和图片
5. ✅ 引用（支持嵌套）
6. ✅ 代码块（支持语法高亮）
7. ✅ 表格（支持对齐）
8. ✅ 分隔线
9. ✅ 脚注
10. ✅ GitHub Markdown Alerts
11. ✅ Emoji
12. ✅ 数学公式（如果支持）
13. ✅ 特殊字符
14. ✅ 缩进和空格
15. ✅ 性能测试

如需添加更多测试用例，请编辑本文档。
