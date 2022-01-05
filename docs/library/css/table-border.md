<h2 align="center">Table 设置 border</h2>

> **border-collapse: collapse** 可以把重复部分的边框隐藏掉

![Table Border](../../Image/table-border.png)

```css
table {
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 3px 5px;
  text-align: left;
}

table th {
  background-color: #f1f1f1;
  text-align: center;
  background: #f1f1f1;
}
```
