# 2 选择符

css的主要优势之一就是能轻易的为同类型的所有元素应用一组样式

### 2.1 样式的基本规则

以前我们只能编辑html文件，所有的元素都要手动修改

以前

```css
<h2><font color="pink">This is a pink text</font></h2>
<p><font color="#ff1493">this is a deep pink text</font></p>
```

现在

```css
<h2>This is a young green text</h2>
<p>this is a young forestgreen text</p>
```

##### 2.1.1 现在我们有了元素选择器

- 元素选择器（Element Selector）通常是HTML元素
- HTML文档中的元素是最基本的选择符
- HTML文档中的元素是预设的，例如h3 p em
- 为XML的CSS可以是自定义的元素，例如quteo { color: gray } - (android?)

##### 2.1.2 声明和关键字

- 有一个或多个声明，且格式是固定的，属性： 值；
- 间隔之间的空格可以是任意个的
- 声明中的属性或值有误，整个规则都会被忽略
