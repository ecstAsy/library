###
 # @Author: ecstAsy
 # @Date: 2022-01-04 18:01:54
 # @LastEditTime: 2022-01-04 18:04:42
 # @LastEditors: ecstAsy
### 

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@gitee.com:ecst/ecstAsy-library.git master:gh-pages

cd -