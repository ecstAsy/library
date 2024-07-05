---
title: blob 导出文件
author: ecstAsy
date: "2022-06-09"
---

#### 示例

```js
export const pdfExport = async (rest: { url: string, filename: string }) => {
  const token = getItem("tm-token");
  const res = await fetch(rest.url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const blob = await res.blob();
  const downloadElement = document.createElement("a"); // 创建一个a 虚拟标签
  const href = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  downloadElement.download = rest.filename; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href);
};
```

> window.URL.createObjectURL()
> 根据传入的参数创建一个指向该参数对象的 URL，使用此 URL 可以访问到指定的文件，这个 URL 仅存在于当前被创建的文档中，新的对象 URL 指向执行的 Filed 对象或者 Blob 对象

> window.URL.revokeObjectURL()
> 释放通过 window.URL.createObjectURL 创建的对象 URL，当只需访问一次，已经使用过了对象 URL，通知浏览器 URL 已不再需要指向对应的文件，将对象 URL 释放，避免内存泄漏
