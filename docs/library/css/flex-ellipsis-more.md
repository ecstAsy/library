<h2 align="center">Flex 布局 实现 ellipsis 查看更多more </h2>

![Flex 布局 实现 ellipsis](../../Image/flex-ellipsis.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flex</title>
  </head>
  <style>
    .box {
      width: 800px;
      height: 40px;
      background: #f6f6f6;
      margin: 100px auto;
      display: flex;
      flex-direction: row;
    }

    .first {
      width: 100px;
      background: chartreuse;
    }

    .second {
      background-color: chocolate;
      width: 700px;
    }

    .second-content {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    .three {
      width: 100px;
      background: crimson;
    }

    .dd {
      background: cyan;
      margin-right: 10px;
    }

    .left {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .right {
      background: darkblue;
    }

    .right div {
      display: flex;
    }

    .right div span {
      display: inline-block;
      padding: 0 5px;
    }
  </style>

  <body>
    <div class="box">
      <div class="second">
        <div class="second-content">
          <div class="dd">1</div>
          <div class="left">
            芦叶满汀洲，寒沙带浅流。 二十年重过南楼。
            柳下系船犹未稳，能几日，又中秋。
            黄鹤断矶头，故人曾到否？旧江山浑是新愁。
            欲买桂花同载酒，终不似，少年游。
          </div>
          <div class="right">
            <div>
              <span>2</span>
              <span>3</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <div class="three">3</div>
    </div>
    <div class="box">
      <div class="second">
        <div class="second-content">
          <div class="dd">1</div>
          <div class="left">欲买桂花同载酒，终不似，少年游。</div>
          <div class="right">
            <div>
              <span>2</span>
              <span>3</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <div class="three">3</div>
    </div>
    <div class="box">
      <div class="second">
        <div class="second-content">
          <div class="dd">1</div>
          <div class="left">芦叶满汀洲，寒沙带浅流。 二十年重过南楼。。</div>
          <div class="right">
            <div>
              <span>2</span>
              <span>3</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <div class="three">3</div>
    </div>
  </body>
</html>
```
