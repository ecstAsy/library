<h2 align="center">常见Git报错</h2>

## Authentication Failed for http://x.x.x.x/x/git

***Action:*** 
    这种报错出现在你所跟踪的Git地址账号和密码不一致时。
***Solution:*** 
[1] 打开控制面板
[2] 点击用户账户
[3] 管理windows凭据
[4] 找到对应Git地址的账户和密码（删除或者直接修改）

## git commit 提交的时候报错husky > pre-commit hook failed (add --no-verify to bypass)

***Action：*** 
    这个问题是因为当你在终端输入git commit -m "XXX",提交代码的时候,pre-commit(客户端)钩子，它会在Git键入提交信息前运行做代码风格检查。如果代码不符合相应规则，则报错，而它的检测规则就是根据.git/hooks/pre-commit文件里面的相关定义。
***Solution:*** 
- 1
```js
npm uninstall husky --save
```
- 2
进入项目的.git文件夹(文件夹默认隐藏,可先设置显示或者命令ls查找),再进入hooks文件夹,删除pre-commit文件

__MAC__ 对于隐藏文件可能不太好找，可以通过 linux 命令来操作

```js
// 查看全部文件
ls -a

// 进入 .git 文件
cd .git

// 进入hooks文件
cd hooks

// 删除 pre-commit.js 文件
rm -rf pre-commit.js
```

- 3
将git commit -m "XXX" 改为 git commit --no-verify -m "XXX"