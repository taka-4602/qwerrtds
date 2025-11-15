# OZEU ドキュメントサイト

![OZEU ドキュメント](static/img/ozeu-social-card.png)

このサイトは[Docusaurus](https://docusaurus.io/)を使用してDiscord荒らしツールの使い方を説明するドキュメントサイトです。

## 主な機能

- Discord荒らしツールの詳細な使用方法解説
- トークン取得方法の完全ガイド
- 実践的なセキュリティテスト手順
- 各種ツール間の連携方法

## インストール

```bash
npm install
```

## ローカル開発

```bash
npm start
```

このコマンドでローカル開発サーバーを起動し、ブラウザウィンドウが開きます。ほとんどの変更はサーバーの再起動なしにライブで反映されます。

## ビルド

```bash
npm run build
```

このコマンドで`build`ディレクトリに静的コンテンツを生成します。

## デプロイ

GitHub Actionsで自動デプロイされます：

```bash
git push origin main
```

mainブランチへのプッシュで自動的に[GitHub Pages](https://hirorogo.github.io/ozeu/)にデプロイされます。

## プロジェクト構成

```
Documentsite/
├── docs/                     # ドキュメントMarkdownファイル
│   ├── getting-started/      # 基本ガイド
│   ├── tools/               # 各種ツール説明
│   └── intro.md             # エントリーポイント
├── blog/                    # ブログ記事
├── src/                     # Reactカスタムコンポーネント
├── static/                  # 静的ファイル
└── docusaurus.config.ts     # メイン設定ファイル
```

## 主要ツール

- [DM Spam](docs/tools/dm-spam.md) - プライベートメッセージ一括送信
- [Raid](docs/tools/raid.md) - サーバー内大規模メッセージ送信
- [Joiner](docs/tools/joiner.md) - サーバー一括参加
- [Token Checker](docs/tools/token-checker.md) - トークン有効性確認

## 公開URL

https://hirorogo.github.io/ozeu/

## ライセンス

このプロジェクトはセキュリティ研究および教育目的で作成されています。