# OZEU - ツール使い方ドキュメントサイト

このリポジトリは、Docusaurusを使用して構築されたツールの使い方説明サイトです。

## プロジェクト概要
- **目的**: ツールの使い方をわかりやすく日本語で説明
- **技術**: Docusaurus 3.8.1 + TypeScript + React 18.0
- **デプロイ**: GitHub Pages（自動デプロイ対応）
- **URL**: https://hirorogo.github.io/ozeu/

## クイックスタート

### 1. 開発環境のセットアップ
```bash
cd Documentsite
npm install
```

### 2. ローカル開発サーバー起動
```bash
npm start
```
ブラウザで http://localhost:3000 にアクセスして確認

### 3. ビルドとデプロイ
```bash
npm run build
```
`main`ブランチへのプッシュで自動的にGitHub Pagesにデプロイされます。

## プロジェクト構造
```
ozeu/
├── Documentsite/              # メインプロジェクト
│   ├── docs/                  # ドキュメント
│   ├── blog/                  # ブログ記事
│   ├── src/                   # Reactコンポーネント
│   │   ├── components/        # カスタムコンポーネント
│   │   ├── css/               # スタイルシート
│   │   └── pages/             # カスタムページ
│   ├── static/                # 静的ファイル
│   └── docusaurus.config.ts   # 設定ファイル
├── .github/                   # GitHub設定・ワークフロー
└── README.md                  # このファイル
```

## 主な機能
- 📖 Markdownでドキュメント作成
- 🌐 多言語対応（日本語デフォルト）
- 📱 レスポンシブデザイン
- 🔍 検索機能
- 📝 ブログ機能
- ⚙️ カスタマイズ可能なテーマ

## 開発ガイドライン
- 日本語でコメントを記述
- TypeScript使用推奨
- 絵文字使用禁止
- インデント: スペース2つ
- セミコロン必須

## 技術仕様
- **Node.js**: v20.11.0
- **Docusaurus**: 3.8.1
- **React**: 18.0
- **TypeScript**: 対応
- **エンコーディング**: UTF-8

## ライセンス
MIT License

## 開発者
- **開発者**: hiro
- **GitHub**: [hirorogo](https://github.com/hirorogo)
- **リポジトリ**: [ozeu](https://github.com/hirorogo/ozeu)
cd /Users/hiro/Documents/ozeu/Documentsite
npm start