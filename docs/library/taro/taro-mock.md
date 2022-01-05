<h2 align="center">Taro 项目里面添加 Mock 数据</h2>

### 安装 Mock 依赖库

```
yarn add mocker-api mockjs --dev
```

比如我们想用 Mock 模拟用户信息以及小说列表，
我们在项目根目录新建 _mock_ 文件夹，新建 _index.js_ _book.js_

**index.js**

```js
const delay = require("mocker-api/utils/delay"); // 延时 模拟请求异步问题
const mockjs = require("mockjs");
const BookData = require("./book");

/**
|--------------------------------------------------
| @hasOwnProperty
| 返回一个布尔值
| 指示对象自身属性中是否具有指定的属性（也就是是否有指定的键）
|
| @trim
| 返回的是一个新的字符串
| 从一个字符串的两端删除空白字符 在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）
|--------------------------------------------------
*/

const Query = (options, dataSource) => {
  let { current, pageSize, ...other } = options;
  current = current || 1;
  pageSize = pageSize || 10;
  for (let key in other) {
    if ({}.hasOwnProperty.call(other, key)) {
      dataSource = dataSource.filter((item) => {
        if ({}.hasOwnProperty.call(item, key)) {
          return (
            String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          );
        }
        return true;
      });
    }
  }
  return { current, pageSize, dataSource };
};

const data = {
  "GET /api/user": {
    data: {
      id: 1,
      username: "kenny",
      sex: 6,
    },
    statusCode: "200",
  },
  "GET /api/hi": (req, res) => {
    res.json({
      id: 1,
      //query 方法获取Get参数,如 /api/hi?name=tony
      username: req.query["name"],
    });
  },
  //可以直接使用mockjs生成mock数据
  "GET /api/mock": mockjs.mock({
    "list|10-100": 1,
  }),
  "GET /api/book/list": (req, res) => {
    const { query } = req;
    const { current, pageSize, dataSource } = Query(query, BookData.data.lists);
    res.status("200").json({
      data: {
        lists: dataSource.slice((current - 1) * pageSize, current * pageSize),
        pageInfo: {
          current: Number(current),
          pageSize: Number(pageSize),
          total: dataSource.length,
          maxCurrent:
            dataSource.length % pageSize >= 0
              ? Math.ceil(dataSource.length / pageSize)
              : dataSource.data.length / pageSize,
        },
      },
      statusCode: "200",
    });
  },
};
// 使用delay方法可以延迟返回数据
module.exports = delay(data, 1000);
```

book.js

```js
/**
|--------------------------------------------------
| @book 
| Mock 数据集合
|--------------------------------------------------
*/

const delay = require("mocker-api/utils/delay");
const Mock = require("mockjs");

const Random = Mock.Random;

const titles = Random.shuffle([
  "Brother's Rainbow",
  "A Dream of Justice",
  "A Marriage Collection",
  "Midwife and Light",
  "The Trophy Failure",
  "Destiny's Cut",
  "Rakehell's Fog",
  "The Ragged ",
  "Thread",
  "The Thug Chaser",
  "Church in the Glass",
  "Destiny's Hero",
  "Cat in the Underworld",
  "Triumph of the Empire",
  "Sapphire Raiders",
  "The Time of War",
  "冬天的早班飞机",
  "我们始终没有牵手旅行",
  "不想告别的夏天",
  "最初的爱情",
  "最后的仪式",
  "十一种孤独",
  "一部法国小说",
  "还乡之谜",
  "地下时光",
  "给樱桃以性别",
  "天使与昆虫",
  "在路上",
  "绿皮书",
  "老人与海",
  "追风筝的人",
  "小王子",
  "百年孤独",
  "人类简史",
  "时间简史",
  "心有林夕",
  "麦田里的守望者",
]);

const images = [
  "http://qiniu.library-online.cn/image1.jpg",
  "http://qiniu.library-online.cn/image10.jpeg",
  "http://qiniu.library-online.cn/image12.jpeg",
  "http://qiniu.library-online.cn/image13.jpeg",
  "http://qiniu.library-online.cn/image14.jpg",
  "http://qiniu.library-online.cn/image16.jpg",
  "http://qiniu.library-online.cn/image17.jpg",
  "http://qiniu.library-online.cn/image2.jpg",
  "http://qiniu.library-online.cn/image20.png",
  "http://qiniu.library-online.cn/image21.png",
  "http://qiniu.library-online.cn/image22.png",
  "http://qiniu.library-online.cn/image23.png",
  "http://qiniu.library-online.cn/image24.png",
  "http://qiniu.library-online.cn/image3.jpg",
  "http://qiniu.library-online.cn/image4.jpg",
  "http://qiniu.library-online.cn/image5.jpg",
  "http://qiniu.library-online.cn/image6.jpeg",
  "http://qiniu.library-online.cn/image7.jpg",
  "http://qiniu.library-online.cn/image8.png",
  "http://qiniu.library-online.cn/image9.jpg",
];

const authors = (function () {
  let t = ["[哥]加西亚·马尔克斯", "[英]毛姆", "[法]圣-埃克苏佩里"];
  for (let i = 0; i < 10; i++) t.push(Random.name());
  return Random.shuffle(t);
})();

const data = Mock.mock({
  "lists|80-100": [
    {
      id: "@increment",
      "title|+1": titles,
      isbn: "@natural(9781782910284, 9981782910284)",
      publisher: "上海人民出版社",
      pubdate: "@date",
      "author|+1": authors,
      translator: "@cname",
      binding: "精装",
      price: "@float(60, 100, 2, 2)",
      pages: "@integer(60, 100)",
      words: "@integer(60, 100)",
      tags: ["小说", "文学", "名著"],
      score: "@float(0, 10, 1, 1)",
      review_num: "@integer(60, 100)",
      "image|+1": images,
      introduction:
        "12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。\n成年后的阿米尔始终无法原谅自己当年对哈桑的背叛。为了赎罪，阿米尔再度踏上暌违二十多年的故乡，希望能为不幸的好友尽最后一点心力，却发现一个惊天谎言，儿时的噩梦再度重演，阿米尔该如何抉择？\n故事如此残忍而又美丽，作者以温暖细腻的笔法勾勒人性的本质与救赎，读来令人荡气回肠。",
    },
  ],
});

module.exports = {
  data,
};
```

数据创建完成以后，还有很重要的一点，要使用 node 启动本地 mock 服务，才能使用。

修改 package.json 文件，在 scripts 下新增一行：

```
"mock": "mocker ./mock"
```

打开新的 powershell 窗口输入命令

```
npm run mock
```

你会看到一下界面

```js
> mocker ./mock
> Server Listening at Local: http://localhost:3721/
>             On Your Network: http://192.168.18.105:3721/
```

这说明你的 mock 本地服务已经开启，你可以在浏览器进行测试：
_http://localhost:3721/api/user_

```json
{ "id": 1, "username": "kenny", "sex": 6 }
```

_http://localhost:3721/api/book/list_

```json
lists: [{id: 92, title: "百年孤独", isbn: 9862023825827, publisher: "上海人民出版社", pubdate: "1998-08-26",…},…]
0: {id: 92, title: "百年孤独", isbn: 9862023825827, publisher: "上海人民出版社", pubdate: "1998-08-26",…}
1: {id: 93, title: "Sapphire Raiders", isbn: 9961722412184, publisher: "上海人民出版社", pubdate: "1985-05-11",…}
2: {id: 94, title: "Thread", isbn: 9782748718675, publisher: "上海人民出版社", pubdate: "1978-03-28",…}
3: {id: 95, title: "Church in the Glass", isbn: 9947427120465, publisher: "上海人民出版社",…}
4: {id: 96, title: "最后的仪式", isbn: 9819760035833, publisher: "上海人民出版社", pubdate: "1974-05-09",…}
5: {id: 97, title: "A Marriage Collection", isbn: 9835318737981, publisher: "上海人民出版社",…}
6: {id: 98, title: "我们始终没有牵手旅行", isbn: 9894147842790, publisher: "上海人民出版社", pubdate: "1998-10-07",…}
7: {id: 99, title: "Cat in the Underworld", isbn: 9966908076203, publisher: "上海人民出版社",…}
8: {id: 100, title: "冬天的早班飞机", isbn: 9884402184420, publisher: "上海人民出版社", pubdate: "2006-05-16",…}
9: {id: 101, title: "人类简史", isbn: 9794492166636, publisher: "上海人民出版社", pubdate: "1986-07-19",…}
```

接下来我们就可以愉快的进行自己项目开发了。

我用 Mock 和 Taro 一起开发的，代码已经上传[git 代码仓库](https://github.com/ecstAsy/Taro-Mock).

关于更多信息请自行参考 [Taro 开发文档](https://nervjs.github.io/taro/docs/README.html) 和 [Mock 开发文档](https://github.com/nuysoft/Mock/wiki/Getting-Started) 自行研究。
