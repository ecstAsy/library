---
title: 在小程序中收集FormId
author: ecstAsy
date: "2022-01-04"
---

## 收集 FormId 的原因

在小程序开发中，根据业务需求，我们需要通过我们的服务器向用户推送模板消息，但是发送一次模板消息就需要收集一条 formid
（例如：当你用户在你的小程序里面进行支付之后，形成一个订单，你需要通知用户的订单情况，这时就需要模板消息），根据小程的
官方文档，我们每次只能获取一条 formId，但是我们在真实的生产环境中，每次收集一条是无法满足我们的需求的，这时我们就需要
通过一些其他的方法来实现一次性收集更多的 formid ，以供我们可以给用户发送更多的模板消息次数。

**_formid_**
注：一个 formid 只能使用一次。
**_模板消息_**
注：登陆小程序后台管理平台，可以自己选择配置模板消息类型，如果有更多需求，可以自定义。

## 收集 FormId 说明

当点击 form 表单中 form-type 为 submit 的 button 组件时，form 中 report-submit 的属性为 true 时，我们
才能获取到一条 FormId （只有在真机中才会获取真实 FormId , 开发工具中获取的只是 undefind )。

formId 的期限只有 一周

## 一次收集一个

```js
wxml: <form report-submit="true" bindsubmit="handleCollect">
  <Button form-type="submit" />
</form>;

js: handleCollect = (e) => {
  let formId = e.detail.formId;
  // formId 就是我们要获取的
  // todo 将收集到的 formId 提交给后台，保存下来供做推送使用
};
```

## 一次收集多个

```js
wxml: <block>
  <label for="9">
    <label for="8">
      <label for="7">
        <label for="6">
          <label for="5">
            <label for="4">
              <label for="3">
                <label for="2">
                  <label for="1">
                    <label for="0">
                      <solt />
                    </label>
                  </label>
                </label>
              </label>
            </label>
          </label>
        </label>
      </label>
    </label>
  </label>
  <block wx:for="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" wx:key="{{item}}">
    <form key={i} report-submit bindsubmit="handleCollect">
      <button id="{{item}}" form-type="submit" />
    </form>
  </block>
</block>;
```

js:

```js
formIds = [];
handleCollect = (e) => {
  formIds = [...formIds, e.detail.formId];
  if (formIds.length === 10) {
    // todo 提交后台，一次性收集 10条

    formIds = [];
    // 一次收集完以后记得要清空，以便下次收集
  }
};
```

## Taro 自定义组件收集 FormId

```js
export default class FormIdCollect extends Component {
  formIds = [];

  handleCollect = (e) => {
    this.formIds.push(e.detail.formId);
    if (this.formIds.length === 10) {
      // todo 提交后台，一次性收集 10条

      this.formIds = [];
      // 一次收集完以后记得要清空，以便下次收集
    }
  };
  render() {
    return (
      <Block>
        <Label for="button_9">
          <Label for="button_8">
            <Label for="button_7">
              <Label for="button_6">
                <Label for="button_5">
                  <Label for="button_4">
                    <Label for="button_3">
                      <Label for="button_2">
                        <Label for="button_1">
                          <Label for="button_0">{this.props.children}</Label>
                        </Label>
                      </Label>
                    </Label>
                  </Label>
                </Label>
              </Label>
            </Label>
          </Label>
        </Label>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <Form key={i} reportSubmit onSubmit={this.handleCollect}>
            <Button id={`button_${i}`} formType="submit" />
          </Form>
        ))}
      </Block>
    );
  }
}
```

## Taro 开发文档

> https://nervjs.github.io/taro/docs/README.html

## 多次收集实现原理

**_label_**

大家可以看到，label 的 n 次循环就是收集的条数，也就是说收集的条数和 label 有关系。

label 用来改进表单组件的可用性。

使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。
