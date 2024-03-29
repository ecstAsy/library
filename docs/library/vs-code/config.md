---
title: Vscode 编辑器配置记录
author: ecstAsy
date: "2022-01-04"
---

- 配置文件 settings.json

  - windows

    ```json
      {
    "workbench.startupEditor": "none",
    "workbench.iconTheme": "vscode-icons-mac",
    "workbench.editor.splitInGroupLayout": "vertical",
    "editor.tabSize": 2,
    "editor.fontSize": 16,
    "editor.fontFamily": "Courier New",
    "editor.formatOnType": true,
    "editor.formatOnSave": true,
    "editor.formatOnPaste": false,
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    },

    // eslint
    "eslint.validate": ["javascript", "javascriptreact", "html", "vue"],
    "eslint.format.enable": true,
    "eslint.codeAction.showDocumentation": {
      "enable": true
    },

    // git
    "git.confirmSync": false,
    // theme
    "workbench.colorTheme": "Boxy Ocean (dimmed bg)",

    // auto comments
    "fileheader.configObj": {
      "autoAdd": false,
      "autoAddLine": 300
    },
    "fileheader.customMade": {
      "Author": "ecstAsy",
      "Date": "Do not edit",
      "LastEditTime": "Do not edit",
      "LastEditors": "ecstAsy"
    },
    "fileheader.cursorMode": {
      "description": "",
      "param": "",
      "return": ""
    },

    // liveServer
    "liveServer.settings.host": "localhost",

    // 韭菜盒子
    "leek-fund.stocks": [
      "sh000001",
      "sh113060",
      "sz000901",
      "sz002129",
      "sz000547",
      "sz002567",
      "sz000683",
      "sz000625",
      "sh588000",
      "sh601677",
      "sh600059",
      "hk03690",
      "hk00700",
      "usr_ixic",
      "usr_dji",
      "usr_inx",
      "sz002091",
      "sz002866",
      "sh600348",
      "hk01919",
      "sh601919",
      "hk06030",
      "sh600030",
      "sz000718",
      "sh600733",
      "sz000965",
      "sh600559",
      "sz000957"
    ],
    "leek-fund.funds": [[]],
    // volar
    "volar.icon.finder": true,
    "volar.icon.preview": true,
    "editorconfig.generateAuto": false,
    "editorconfig.template": "default",
    "files.eol": "\n",
    "editor.wordWrap": "on",
    "eslint.packageManager": "pnpm",
    // "[vue]": {
    //   "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    // },
    "[scss]": {
      "editor.defaultFormatter": "michelemelluso.code-beautifier"
    },
    "eslint.alwaysShowStatus": true,
    "[less]": {
      "editor.defaultFormatter": "michelemelluso.code-beautifier"
    },
    "[javascript]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[css]": {
      "editor.defaultFormatter": "michelemelluso.code-beautifier"
    },
    "[html]": {
      "editor.defaultFormatter": "vscode.html-language-features"
    },
    "editor.unicodeHighlight.ambiguousCharacters": false,
    "editor.fontWeight": "normal",
    "files.associations": {
      "*.vue": "vue"
    },
    "bracketPairColorizer.depreciation-notice": false,

    // background
    "background.enabled": true,
    "background.useDefault": false,
    "background.loop": true,
    "background.style": {
      "content": "''",
      "pointer-events": "none",
      "position": "absolute",
      "z-index": "99999",
      "width": "100%",
      "height": "100%",
      "background-position": "0% 0%",
      "background-size": "cover",
      "background-repeat": "no-repeat",
      "opacity": 0.1
    },
    "background.customImages": [
      "file:///C:/Users/ee/Desktop/VsConfig/vs-code-bg.jpg",
      // "file:///C:/Users/ee/Desktop/VsConfig/demo1.jpg",
      // "file:///C:/Users/ee/Desktop/VsConfig/demo2.jpg",
      // "file:///C:/Users/ee/Desktop/VsConfig/demo3.jpg",
      // "file:///C:/Users/ee/Desktop/VsConfig/demo4.jpg",
      "file:///C:/Users/ee/Desktop/VsConfig/demo5.jpg"
    ]
    }

    ```

  ````

  - Mac
    ```json
    {
      "workbench.colorTheme": "Boxy Monokai",
      "workbench.iconTheme": "vscode-icons-mac",
      "editor.fontSize": 15,
      "editor.tabSize": 2,
      "editor.fontFamily": "Courier New",
      "emmet.triggerExpansionOnTab": true,
      "editor.formatOnType": true,
      "editor.formatOnSave": true,
      "git.autofetch": true,
      "backgroung.enable": true,
      "background.useDefault": false,
      "background.customImages": ["file:///Users/mac/Desktop/STUDY/vs-bg.jpeg"],
      "background.style": {
        "content": "''",
        "pointer-events": "none",
        "position": "absolute",
        "z-index": "99999",
        "width": "100%",
        "height": "100%",
        "background-position": "0% 0%",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "opacity": 0.1
      },
      "advancedNewFile.exclude": {
        "node_modules": true,
        "node_modules_electron": true,
        "dev": true,
        "dist": true
      },
      "advancedNewFile.showInformationMessages": true,
      "advancedNewFile.convenienceOptions": ["last", "current", "root"]
    }
  ````
