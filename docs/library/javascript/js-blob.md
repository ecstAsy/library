---
title: blob 导出文件
author: ecstAsy
date: "2022-06-09"
---

#### 示例
``` js
export const pdfExport = async (rest:{url:string, filename:string}) => {
  const token = getItem("tm-token");
  const res = await fetch(rest.url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const blob = await res.blob();
  const downloadElement = document.createElement("a");// 创建一个a 虚拟标签
  const href = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  downloadElement.download = rest.filename; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href);
};
```