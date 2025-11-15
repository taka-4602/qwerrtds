# OZEU Web Tools Portal

Discord用のWebツールポータルサイトです。Cloudflare Pagesで自動デプロイされます。

## 構成

- **メインサイト**: Discordツールのポータルページ
- **ドキュメントサイト**: Docusaurus を使用したヘルプ・ドキュメント（`/help/` サブパスで利用可能）

## デプロイ

このプロジェクトは Cloudflare Pages を使用して自動デプロイされます。

### セットアップ手順

1. Cloudflare Dashboardで以下の設定を行ってください：
   - Pages → Create a project → Connect to Git
   - GitHubリポジトリを選択
   - Build settings:
     - Framework preset: "None"
     - Build command: 空白（GitHub Actionsでビルド済み）
     - Build output directory: `public`
     - Root directory: 空白

2. `main` ブランチにプッシュすると自動的にビルドとデプロイが実行されます

### 重要：ビルド設定

Cloudflare Pagesでは、GitHub Actionsで事前ビルドされた `public` ディレクトリを直接デプロイします。
Cloudflare側でのビルドコマンドは不要です。

### ローカル開発

#### メインサイト
```bash
# ブラウザで index.html を直接開くか、ローカルサーバーを起動
python3 -m http.server 8000
```

#### ドキュメントサイト（Docusaurus）
```bash
cd Documentsite
npm install
npm start  # 開発サーバー起動
npm run build  # 本番ビルド
```

## プロジェクト構造

```
qwerrtds/
├── index.html                 # メインポータルページ
├── config.json               # 設定ファイル
├── .github/workflows/        # GitHub Actions設定
├── Documentsite/             # Docusaurusドキュメント
└── [tool-name]/              # 各ツールのディレクトリ
    └── index.html
```

## アクセス URL

- メインサイト: `https://tools.ozeu.net/`
- ヘルプ: `https://tools.ozeu.net/help/`

## 開発者向け情報

- メインサイトは静的HTML/CSS/JavaScript
- ドキュメントサイトはDocusaurus (React ベース)
- GitHub ActionsでビルドとCloudflare Pagesでデプロイを自動化

## カスタムドメイン設定

Cloudflare Pagesでカスタムドメイン `tools.ozeu.net` を使用する場合は、
Cloudflare Dashboard → Pages → Custom domains で設定してください。
