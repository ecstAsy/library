<h2 align="center">Web端用到的Excel插件</h2>

### 把数组转换成Excel表格

***js-export-excel***

- 安装依赖

```js
npm install js-export-excel

yarn add js-export-excel
```

- 在使用页面引入依赖

```js
const ExportJsonExcel = require('js-export-excel');

import ExportJsonExcel from 'js-export-excel';
```

- 调用

```js
 /**
    |--------------------------------------------------
    | @dataSource 
    |   下载的全部数据
    | @TableObject
    |   所要下载的表格的表头和值
    |--------------------------------------------------
    */
const downloadExcel = ({ dataSource, TableObject }) => {
      const option = {};
      let dataTable = [];
      const KEYS = Object.keys(TableObject);
      // eslint-disable-next-line compat/compat
      const Values = Object.values(TableObject);
      if (dataSource) {
        dataSource.forEach(item => {
          const obj = {};
          KEYS.forEach(key => {
            obj[key] = item[key] || ''
          })
          dataTable = [...dataTable, obj];
        })
      }
      // fileName 表格名称
      option.fileName = ExportUserObj[ExType].title;
      option.datas = [
        {
          sheetData: dataTable,      // 筛选的符合的表格数据
          sheetName: 'sheet',        // sheet
          sheetFilter: KEYS,         // 需要筛选的字段
          sheetHeader: Values,       // 表头
        }
      ];

      const toExcel = new ExportJsonExcel(option);
      toExcel.saveExcel();
    }
// 调用
const TableObject = {
  name: '名字',
  age: '年龄'
}
downloadExcel({ dataSource, TableObject });
```



### 上传Excel时，获取Excel的内容

***xlsx***

- 安装依赖

```js
npm install xlsx

yarn add xlsx
```

- 在使用页面引入依赖

```
import * as XLSX from 'xlsx';
```

- 调用

```js
// js
const onImportExcel = files => {


    let data = [];// 存储获取到的数据

    // 通过FileReader对象读取文件

    const fileReader = new FileReader();

    fileReader.readAsBinaryString(files);
    // 二进制

    fileReader.onload = event => {

      try {

        const { result } = event.target;

        // 以二进制流方式读取得到整份excel表格对象

        const workbook = XLSX.read(result, { type: 'binary' });
        // 遍历每张工作表进行读取（这里默认只读取第一张表）

        // eslint-disable-next-line no-restricted-syntax
        for (const sheet in workbook.Sheets) {
          // eslint-disable-next-line no-prototype-builtins
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]))
          }
        }
       console.log(data)     // 这里获取的就是从Excel中得到的全部数据（Array)
      } catch (e) {

        // 这里可以抛出文件类型错误不正确的相关提示

        message.warning('文件类型不正确');
        return false

      }

    };

  }


  // html

  <Upload
    {...props}
    beforeUpload={e => onImportExcel(e)}
    onDownload={e => handleDownload(e)}
  >
    <Button disabled={Boolean(file)}>
      <Icon type="upload" /> 上传文件
    </Button>
  </Upload>
```