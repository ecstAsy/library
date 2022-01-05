<h2 align="center">Radio 修改选中样式</h2>

### Weapp

![Radio Weapp](../../assets/radio-weapp.png)

```css
radio .wx-radio-input.wx-radio-input-checked::before {
  content: "\a0";
  font-size: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 10px solid #fff;
  transform: translate(-50%, -50%) scale(0.75);
  -webkit-transform: translate(-50%, -50%) scale(0.75);
}
```

### Web

```css
input[type="radio"] + label::before {
  content: "\a0"; /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  border-radius: 50%;
  border: 1px solid #01cd78;
  text-indent: 0.15em;
  line-height: 1;
}
```
