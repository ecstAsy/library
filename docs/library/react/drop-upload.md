---
title: 拖拽上传获取文件目录
author: ecstAsy
date: "2022-01-19"
---

### 前言

preact 在 PC 端实现拖拽上传文件夹、点击选择单文件上传

### 实现功能

- [x] 拖拽选择文件夹
- [x] 文件夹 tree 解析
- [ ] 文件 tree 显示
- [x] 点击选择文件
- [ ] 动态实现 拖拽和点击选择文件夹和文件

### 核心代码

- directory.js (获取拖拽的文件夹和文件内容)

```js
function toArray(list) {
  return Array.prototype.slice.call(list || [], 0);
}

function errorHandler(e) {
  console.log(`FileSystem API error code: ${e.code}`);
}
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
    this.setValue(entires);
    entires.map((item) => {
      if (item.isDirectory) {
        let directoryReader = item.createReader();
        this.getAllEntries(directoryReader);
      } else {
        item.file((file) => {
          file.fullPath = item.fullPath;
          item.content = file;
        });
      }
    });
  }
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

  getDirectoryInfo = (entries) => {
    this.setValue(entries);
    entries.map((item) => {
      if (item.isDirectory) {
        console.log(item);
        let directoryReader = item.createReader();
        this.getAllEntries(directoryReader);
      } else {
        item.file((file) => {
          file.fullPath = item.fullPath;
          item.content = file;
        });
      }
    });

    return this.getValue();
  };
}

export default Directory;
```

- tree.js (把获取的文件内容重新排版成树形结构)

```js
const Videos = [
  "wmv",
  "asf",
  "asx",
  "rm",
  "rmvb",
  "mp4",
  "3gp",
  "mov",
  "m4v",
  "avi",
  "dat",
  "mkv",
  "flv",
  "vob",
];
const Images = ["png", "jpg", "jpeg"];
const Icons = [
  "vue",
  "sass",
  "scss",
  "css",
  "jsx",
  "md",
  "js",
  "json",
  "svg",
  "excel",
  "file",
  "word",
  "ppt",
  "music",
  "html",
  "video",
  "img",
  "zip",
  "gif",
  "exe",
  "pdf",
  "txt",
  "wps",
];
const findParent = (values) => {
  values.map((item) => {
    let parent = item.fullPath.split("/");
    parent.pop();
    item.parent = parent.join("/") || "/";
    if (item.isDirectory) {
      item.children = [];
      item.icon = "file";
    } else {
      let itp = item.name.split(".").pop();
      if (Videos.includes(itp)) {
        itp = "video";
      } else if (Images.includes(itp)) {
        itp = "img";
      } else if (itp.match(/htm/)) {
        itp = "html";
      }
      item.icon = Icons.includes(itp) ? itp : "default";
    }
  });
};

const findChildren = (roots, values) => {
  roots.map((item) => {
    if (item.children) {
      item.children = values.filter((file) => file.parent === item.fullPath);
      findChildren(item.children, values);
    }
  });
};

const findType = (values) => {
  values.map((item) => {
    if (item.isDirectory) {
      item.icon = "file";
    } else {
      let itp = item.name.split(".").pop();
      if (Videos.includes(itp)) {
        itp = "video";
      } else if (Images.includes(itp)) {
        itp = "img";
      }
      item.icon = itp;
    }
  });
};

const getTree = (values, type) => {
  if (!values || !values.length) {
    return false;
  }
  let root = [{ name: "/", fullPath: "/", children: [], icon: "file" }];
  if (type === "drop") {
    findParent(values);
    findChildren(root, values);
  } else {
    findType(values);
    root[0].children = values;
  }

  return root;
};

export default getTree;
```

- 仓库地址 （全部代码）
  :book: [GitHub](https://github.com/ecstAsy/drop-upload)
  :books: [Gitee](https://gitee.com/ecst/drop-upload)
