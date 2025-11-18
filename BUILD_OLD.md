# ビルド手順

## ドキュメントサイトの更新とビルド

このプロジェクトは Docusaurus ベースのドキュメントサイトと各種ツール群から構成されています。

### 1. ローカル開発・編集

```bash
# Documentsite フォルダで作業
cd Documentsite

# 依存関係をインストール（初回のみ）
npm ci

# 開発サーバー起動（リアルタイム編集・プレビュー）
npm start
# → http://localhost:3000 でプレビュー可能
```

### 2. ドキュメント編集

- `Documentsite/docs/` 配下の `.md` ファイルを編集
- `Documentsite/docusaurus.config.ts` でサイト設定を変更
- `Documentsite/sidebars.ts` でサイドバー構成を変更

### 3. 本番用ビルド実行

```bash
# プロジェクトルートで実行
cd /Users/hiro/Documents/qwerrtds

# 1. Documentsite をビルド
cd Documentsite && npm ci && npm run build

# 2. トップレベル build ディレクトリに統合
cd .. && rm -rf build && mkdir -p build
cp -r Documentsite/build/* build/

# 3. 各ツールを build/tools にコピー（個別サブディレクトリとして）
mkdir -p build/tools
cp -r raider build/tools/ 
cp -r dm-spammer build/tools/ 
cp -r group-dm-spammer build/tools/ 
cp -r invite-braker build/tools/ 
cp -r joiner build/tools/ 
cp -r reaction-spammer build/tools/ 
cp -r slash-command-auto build/tools/ 
cp -r status-setter build/tools/ 
cp -r token-checker build/tools/ 
cp -r webhook-spammer build/tools/

# 4. オリジナルツール一覧ページをランディングページとして追加
cp index.html build/landing.html

# 5. _redirects ファイルを確認（自動で作成されます）
cat build/_redirects
```

### 4. 最終構成

ビルド後の構成:
```
build/
├── index.html          # Docusaurus メインページ
├── landing.html        # オリジナルツール一覧ページ
├── _redirects          # Cloudflare Pages ルーティング設定
├── docs/              # ドキュメントページ
├── tools/             # 各ツール
│   ├── raider/
│   ├── joiner/
│   └── ... (他のツール)
└── assets/            # CSS/JS リソース
```

### 5. ルーティング

- `/` → Docusaurus メインページ
- `/landing` → オリジナルツール一覧ページ
- `/help` → Docusaurus メインページ（後方互換）
- `/raider` → raider ツール
- `/joiner` → joiner ツール
- `/docs/*` → Docusaurus ドキュメント

### 4. Git コミット・デプロイ

```bash
# 変更をコミット
git add .
git commit -m "Update documentation and tools"
git push origin main
```

### 5. Cloudflare Pages 設定

- **Build command**: 空白（手動ビルド済み）
- **Output directory**: `build`
- **Environment variables**: 必要に応じて API キーなどを設定

## 自動化スクリプト（オプション）

package.json に以下を追加すると `npm run build` で一括実行可能:

```json
{
  "scripts": {
    "build:docs": "cd Documentsite && npm ci && npm run build",
    "build:copy": "rm -rf build && mkdir -p build && cp -r Documentsite/build/* build/ && mkdir -p build/tools && cp raider/* build/tools/ && cp dm-spammer/* build/tools/ && cp group-dm-spammer/* build/tools/ && cp invite-braker/* build/tools/ && cp joiner/* build/tools/ && cp reaction-spammer/* build/tools/ && cp slash-command-auto/* build/tools/ && cp status-setter/* build/tools/ && cp token-checker/* build/tools/ && cp webhook-spammer/* build/tools/ && cp config.json build/ && cp _redirects build/",
    "build": "npm run build:docs && npm run build:copy"
  }
}
```

## 注意事項

- `build/` ディレクトリは Git で追跡されます（Cloudflare Pages デプロイ用）
- `Documentsite/build/` は `.gitignore` で除外されています
- 機密情報（API キー・トークン）はリポジトリに含めず、Cloudflare Pages の環境変数で設定してください
- `/help` パスは自動的に `/index.html`（Docusaurus メインページ）にリダイレクトされます
