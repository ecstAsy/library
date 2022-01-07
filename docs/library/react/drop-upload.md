---
title: 拖拽上传获取文件目录
author: ecstAsy
date: "2022-01-07"
---

### 前言

preact 在 PC 端实现拖拽上传文件夹、点击选择单文件上传
![预览地址](http://172.16.0.139:8080)

### 实现功能

- [x] 拖拽选择文件夹
- [x] 文件夹 tree 解析
- [ ] 文件 tree 显示
- [x] 点击选择文件
- [ ] 动态实现 拖拽和点击选择文件夹和文件

### 获取文件夹目录方法

- directory.js

```js
function toArray(list) {
  return Array.prototype.slice.call(list || [], 0);
}

function errorHandler(e) {
  console.log(`FileSystem API error code: ${e.code}`);
}
// 实例方法封装
class Directory {
  constructor() {
    this.value = [];
  }
  // 赋值
  setValue(vs) {
    this.value = [...this.value, ...vs];
  }
  // 取值
  getValue() {
    return new Promise((resolve) => setTimeout(() => resolve(this.value), 500));
  }
  // 读取文件夹内容
  readDirectory(entires) {
    entires.map((item) => {
      if (item.isDirectory) {
        let directoryReader = item.createReader();
        this.getAllEntries(directoryReader);
      }
    });
    this.setValue(entires);
  }
  // 获取文件夹信息
  getAllEntries(directoryReader) {
    let entries = [];
    let that = this;
    const readEntries = function () {
      directoryReader.readEntries((results) => {
        if (!results.length) {
          entries.sort();
          that.readDirectory(entries);
        } else {
          entries = entries.concat(toArray(results));
          readEntries();
        }
      }, errorHandler);
    };
    readEntries();
  }
  // 暴露出去的方法
  getDirectoryInfo = (entries) => {
    entries.map((item) => {
      if (item.isDirectory) {
        let directoryReader = item.createReader();
        this.getAllEntries(directoryReader);
      }
      this.setValue(entries);
    });

    return this.getValue();
  };
}

export default Directory;
```

### 页面使用

- index.js

```jsx
import { h } from "preact";
import { useState } from "preact/hooks";
import Directory from "../../utils/directory";
import style from "./style.css";

const Home = () => {
  const [value, setValue] = useState([]);
  const [isDrop, setIsDrop] = useState(false);
  const [isError, setIsError] = useState(false);
  const drop = new Directory();
  const onSubmit = () => {
    console.log(value);
  };
  const onChange = (e) => {
    return setValue(e.target.files);
  };
  const onDrop = async (e) => {
    e.preventDefault();
    const length = e.dataTransfer.items.length;
    let entries = [];
    for (let i = 0; i < length; i++) {
      entries = [...entries, e.dataTransfer.items[i].webkitGetAsEntry()];
    }
    const directories = await drop.getDirectoryInfo(entries);
    console.log(directories);
    if (
      directories.length > 1 &&
      !directories.find((item) => item.name.match(/.html/))
    ) {
      return setIsError(true);
    } else if (!directories[0].name.match(/.zip/)) {
      return setIsError(true);
    }

    return setValue(directories);
  };
  const openFile = () => {
    document.getElementById("upload-input").click();
  };

  return (
    <div class={style.home}>
      <h3>文件上传</h3>
      <form class={style.form}>
        <div
          class={style.upload}
          onClick={openFile}
          onDrop={(e) => onDrop(e)}
          onDragover={(e) => {
            e.preventDefault();
            setIsDrop(false);
          }}
          onDragStart={(e) => {
            e.preventDefault();
            setIsDrop(true);
          }}
        >
          <p>将文件拖到此处上传</p>
          <input
            class={style.input}
            value={value}
            id="upload-input"
            type="file"
            accept="*"
            onChange={onChange}
            webkitdirectory={isDrop}
            mozdirectort={isDrop}
          />
        </div>
        <div class={style.error}>
          <span>{isError && `请上传正确的文件类型！`}</span>
        </div>
      </form>

      <button class={style.submit} onClick={onSubmit}>
        提交
      </button>
    </div>
  );
};

export default Home;
```

- index.css

```css
.home {
  min-height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h3 {
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.upload {
  width: 720px;
  height: 360px;
  border-radius: 6px;
  border: 1px dashed #d9d9d9;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.upload p {
  font-size: 14px;
  font-weight: 600;
  color: #606266;
}

.input {
  display: none;
  overflow: visible;
  touch-action: manipulation;
}

.error {
  width: 720px;
  text-align: left;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
}

.error span {
  color: red;
  transition: ease-in-out 0.5s;
}

.submit {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  background-color: #409eff;
  border: 2px solid #409eff;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 24px;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
}

.submit:hover {
  background-color: rgb(102, 177, 255);
  border-color: transparent;
}
```
