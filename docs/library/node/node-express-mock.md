<h2 align="center">node+express+mock</h2>

### 初始化项目 node-express-mock-demo

__使用默认配置__
> npm init -y 

### 依赖安装
 用到的依赖
- express
- mockjs
- supervisor

本地开发需要的依赖安装
> npm i express mockjs --save

全局依赖安装
> sudo npm i supervisor -g

### package.json

```js
{
  "name": "node-express-mock-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "supervisor server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "mockjs": "^1.1.0"
  }
}
```

### 创建文件

在根目录下面新建server.js

```js
const express = require('express');
const app = express();
const { Book, Card } = require('./mock');

app.post('/api/book', (req, res) => res.json(Book))

app.get('/api/card', (req, res) => res.json(Card))

app.get('/api/get', (req, res) => {
  res.json({
    method: 'GET',
    stu: {
      name: 'ddd'
    }
  })
})

app.post('/api/post', (req, res) => {
  res.json({
    method: 'POST',
    car: {
      brand: 'BWM',
      price: 1900
    }
  })
})

app.listen(5888, () => {
  console.log('node 服务器已经启动！');
});
```

根目录下面创建mock文件夹，新建 index.js、book.js、card.js...(你需要的mock数据文件)

__book.js__

```js
const Mock = require('mockjs');
const express = require('express');
const apiRoutes = express.Router();

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
  "麦田里的守望者"
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
  "http://qiniu.library-online.cn/image9.jpg"
];

const authors = (function () {
  let t = ["[哥]加西亚·马尔克斯", "[英]毛姆", "[法]圣-埃克苏佩里"];
  for (let i = 0; i < 10; i++) t.push(Random.name());
  return Random.shuffle(t);
})();

const data = Mock.mock({
  data: {
    'list|80-100': [
      {
        id: "@increment",
        "userId|+1": [1, 2, 3, 4],
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
          "12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。\n成年后的阿米尔始终无法原谅自己当年对哈桑的背叛。为了赎罪，阿米尔再度踏上暌违二十多年的故乡，希望能为不幸的好友尽最后一点心力，却发现一个惊天谎言，儿时的噩梦再度重演，阿米尔该如何抉择？\n故事如此残忍而又美丽，作者以温暖细腻的笔法勾勒人性的本质与救赎，读来令人荡气回肠。"
      }
    ]
  },
  errorMessage: '',
  statusCode: '200'
})

module.exports = data;
```

__card.js__

```js
const Mock = require('mockjs');

const data = Mock.mock({
  data: {
    "list|1-10": [{
      "orderId|1-10": /[a-zA-Z1-9]/,
      "num|1-8": /[1-9]/,
      "isReport": false,
      "title": "样本接收",
      "sendTime": "@date",
      "userName": "@name",
      "examname": "原溯450"
    }]
  },
  errorMessage: '',
  statusCode: '200'
})

module.exports = data
```

__index.js__

```js
const Book = require('./book');
const Card = require('./card');

module.exports = {
  Book,
  Card
}
```

### 运行项目

> npm start


打开浏览器：http://localhost:5888/api/book 你就会看到我们mock的数据了，在其他地方调用的话就像平时调后台接口一样的方法就好了。

源代码已上传github、gitee


- [github代码仓库](https://github.com/ecstAsy/node-express-mock.git)
- [gitee代码仓库](https://gitee.com/ecst/node-express-mock.git)
- [Mock 开发文档](https://github.com/nuysoft/Mock/wiki/Getting-Started)
