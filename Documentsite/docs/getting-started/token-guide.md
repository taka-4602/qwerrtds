---
sidebar_position: 1
title: "トークン取得方法"
---

# トークン取得方法

Discordのトークンを取得する方法を説明します。

注意: トークンの取得や使用はDiscordの利用規約に違反する可能性があります。自己責任で行ってください。

## 取得手順

1. Discordをブラウザで開きます
2. F12キーを押して開発者ツールを開きます
3. Consoleタブを選択します
4. コンソールに警告が表示された場合、`allow pasting` と入力してEnterキーを押します
5. 以下のコードを入力または貼り付けて実行します

```javascript
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```

6. 表示された文字列があなたのトークンです

iPhoneの場合この動画を見てください

https://youtu.be/b6MBDW85tdA?si=UF6ASkwCrgMVYbXS
Androidの場合