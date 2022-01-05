<h3 align='center'>NPM 快速生成文件</h3>

__node快速生成文件夹脚本__

- template.js
```js
var fs = require("fs");
// 生成的文件夹名
var dirName = process.argv[2];
// 文件名
var fileName = process.argv[3] || 'index';
// 写入组件名称（大写）
var copName = `${dirName.substring(0, 1).toUpperCase()}${dirName.substring(1)}`

// 文件模板 (Vue文件为例)
var fileTemp = `
    <template>
      <div class="page-${dirName}">${copName}</div>
    </template>

    <script>
    export default {
      name: "${copName}",
      data() {
        return {
          dataSource: [],
        };
      },
    };
    </script>

    <style lang="less" scoped>
    .${dirName} {
      width: 100%;
      height: 100%;
    }
    </style>
`

// 对应路径下面创建文件
fs.mkdirSync(`./view/${dirName}`);
// 打开对应路径下的文件夹
process.chdir(`./view/${dirName}`);
// 写入文件
fs.writeFileSync(`${fileName}.vue`, fileTemp);
process.exit(0);
```

- package.json

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node server.js",
  "tep":"node template.js"
},
```

- example
> npm run tep good

    ├── view
    │   ├── good
    │   │   ├── index.vue

> npm run tep good list

    ├── view
    │   ├── good
    │   │   ├── list.vue