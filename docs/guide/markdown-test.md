# Markdown/MDX 语法测试

本文档用于测试和展示本项目支持的 Markdown 和 MDX 语法。

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

### 2.2 下划线

<u>下划线文本</u>

### 2.3 行内代码

使用 `行内代码` 标记代码片段。

### 2.4 转义字符

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

### 4.2 图片

![图片描述](https://via.placeholder.com/150)

![带标题的图片](https://via.placeholder.com/150 "图片标题")

### 4.3 图片链接

[![图片链接](https://via.placeholder.com/100)](https://example.com)

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

> 引用中可以包含 **粗体**、`代码` 和 [链接](https://example.com)。

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

---

***

___

### 不同样式

---

## 9. HTML 元素

### 9.1 内联样式

<span style="color: red;">红色文本</span>

### 9.2 自定义类名

<div class="custom-box">
  这是一个自定义样式的盒子
</div>

---

## 10. 脚注

这是一段包含脚注的文本[^1]。

脚注可以放在文档的任何位置[^2]。

[^1]: 这是第一个脚注的说明
[^2]: 这是第二个脚注的说明，可以包含**格式化**文本。

---

## 11. MDX 特性

### 11.1 导入组件

```tsx
import { Button } from './components/Button';
```

### 11.2 使用 React 组件

<div style={{ padding: '16px', background: '#f0f0f0', borderRadius: '8px' }}>
  <h3>这是一个 React 组件</h3>
  <p>可以在 Markdown 中使用 JSX 语法</p>
</div>

### 11.3 内联表达式

2 + 2 = {2 + 2}

当前年份：{new Date().getFullYear()}

### 11.4 条件渲染

{true ? <span>显示这个</span> : <span>不显示这个</span>}

---

## 12. 警告框

### 12.1 提示

> 💡 **提示**
> 
> 这是一条提示信息。

### 12.2 警告

> ⚠️ **警告**
> 
> 这是一条警告信息。

### 12.3 错误

> ❌ **错误**
> 
> 这是一条错误信息。

### 12.4 注意

> ℹ️ **注意**
> 
> 这是一条注意事项。

---

## 13. 代码组

```ts group="基础配置"
const config = {
  name: 'Rspress',
  version: '2.0.0'
};
```

```ts group="基础配置"
const theme = {
  darkMode: true,
  fontSize: 16
};
```

---

## 14. 标签页

<Tabs>
  <TabItem label="JavaScript">
    ```javascript
    console.log('JavaScript');
    ```
  </TabItem>
  <TabItem label="TypeScript">
    ```typescript
    console.log('TypeScript');
    ```
  </TabItem>
  <TabItem label="Python">
    ```python
    print('Python')
    ```
  </TabItem>
</Tabs>

---

## 15. 折叠内容

<details>
  <summary>点击展开</summary>
  
  这是折叠的内容，默认隐藏，点击后显示。
  
  可以包含：
  - 列表项
  - **格式化文本**
  - `代码片段`
  
</details>

---

## 16. Emoji

😀 😃 😄 😁 😆 😅 🤣 😂

👍 👎 👏 👋 🙏 💪

💻 🖥️ 💾 💿 📱

---

## 17. 数学公式（如果支持）

行内公式：$E = mc^2$

块级公式：

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

---

## 18. 自定义组件示例

### 18.1 提示框

<div style={{
  padding: '12px 16px',
  background: '#e3f2fd',
  borderLeft: '4px solid #2196f3',
  borderRadius: '4px',
  margin: '16px 0'
}}>
  <strong>提示：</strong>这是一个自定义样式的提示框
</div>

### 18.2 成功提示

<div style={{
  padding: '12px 16px',
  background: '#e8f5e9',
  borderLeft: '4px solid #4caf50',
  borderRadius: '4px',
  margin: '16px 0'
}}>
  <strong>成功：</strong>操作成功完成
</div>

### 18.3 警告提示

<div style={{
  padding: '12px 16px',
  background: '#fff3e0',
  borderLeft: '4px solid #ff9800',
  borderRadius: '4px',
  margin: '16px 0'
}}>
  <strong>警告：</strong>请注意检查配置
</div>

---

## 19. 快捷键

<kbd>Ctrl</kbd> + <kbd>C</kbd> 复制

<kbd>Ctrl</kbd> + <kbd>V</kbd> 粘贴

<kbd>Ctrl</kbd> + <kbd>S</kbd> 保存

---

## 20. 时间戳

发布时间：2026-03-13

最后更新：{new Date().toLocaleDateString('zh-CN')}

---

## 21. 特殊字符

&copy; &reg; &trade; &euro; &pound; &yen;

&hearts; &spades; &diams; &clubs;

---

## 22. 定义列表

术语 1
:   定义 1

术语 2
:   定义 2
:   定义 2 的第二行

术语 3
:   定义 3

---

## 23. 缩进和空格

    缩进 4 个空格
    会显示为代码块

    第二行缩进

---

## 24. 混合示例

这是一个包含多种元素的段落：

- **粗体**和*斜体*混合使用
- 包含 `行内代码`
- 以及[链接](https://rspress.rs/)
- 和![图片](https://via.placeholder.com/20)

> 引用块中也可以包含列表：
> - 项目一
> - 项目二

---

## 25. 性能测试

### 25.1 大量文本测试

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### 25.2 大量代码测试

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
8. ✅ HTML 元素
9. ✅ 脚注
10. ✅ MDX 特性（JSX、表达式）
11. ✅ 警告框
12. ✅ 代码组
13. ✅ 标签页
14. ✅ 折叠内容
15. ✅ Emoji
16. ✅ 快捷键
17. ✅ 自定义组件

如需添加更多测试用例，请编辑本文档。
