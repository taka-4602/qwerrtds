# OZEU プロジェクト ビルドガイド

## 🚀 クイックビルド

最も簡単な方法：

```bash
./build.sh
```

これで統合ビルドが完了し、`build/`ディレクトリにデプロイ可能なファイルが生成されます。

## 📁 ビルド後の構造

```
build/
├── index.html              # Docusaurusメインページ
├── landing.html            # オリジナルツールポータル（OZEU）
├── _redirects              # Cloudflare Pagesルーティング設定
├── docs/                   # ドキュメント（Docusaurus）
├── tools/                  # 個別ツール
│   ├── raider/
│   ├── joiner/
│   ├── dm-spammer/
│   └── ...
└── assets/                 # 静的アセット
```

## 🌐 ローカルテスト

ビルド後にローカルでテスト：

```bash
cd build
python3 -m http.server 3000
```

ブラウザで `http://localhost:3000/` を開いてテスト。

## ☁️ Cloudflare Pages デプロイ設定

**Build command:**
```bash
./build.sh
```

**Build output directory:**
```
build
```

**Environment variables:** (必要な場合)
- Node.js version: 18以上推奨

## 📋 サイトマップ（デプロイ後）

- `yourdomain.pages.dev/` - Docusaurusメインサイト（ドキュメント）
- `yourdomain.pages.dev/landing` - オリジナルツールポータル（OZEU）
- `yourdomain.pages.dev/raider` - Raiderツール
- `yourdomain.pages.dev/joiner` - Joinerツール
- `yourdomain.pages.dev/docs/` - ドキュメント各ページ
- その他のツール...

## 🔧 手動ビルド手順

自動スクリプトが使用できない場合：

1. **Docusaurusサイトをビルド**
   ```bash
   cd Documentsite
   npm install
   npm run build
   cd ..
   ```

2. **ビルドディレクトリを準備**
   ```bash
   rm -rf build
   cp -r Documentsite/build .
   mkdir -p build/tools
   ```

3. **ツールをコピー**
   ```bash
   cp -r raider joiner dm-spammer group-dm-spammer invite-braker reaction-spammer slash-command-auto status-setter token-checker webhook-spammer build/tools/
   ```

4. **ランディングページとリダイレクトを設定**
   ```bash
   cp index.html build/landing.html
   cp _redirects build/
   ```

## ⚠️ よくある問題と解決方法

### "Your Docusaurus site did not load properly" エラー

**原因:** `baseUrl`設定が間違っている
**解決:** `Documentsite/docusaurus.config.ts`で`baseUrl: '/'`が設定されていることを確認

### リンクが機能しない

**原因:** `_redirects`ファイルが正しく配置されていない
**解決:** `build/_redirects`ファイルが存在することを確認

### ツールページが404エラー

**原因:** ツールディレクトリが正しくコピーされていない
**解決:** `build/tools/`以下に各ツールディレクトリが存在することを確認

## 🛠️ 開発時の注意事項

- Docusaurusの設定変更後は必ず再ビルドが必要
- 新しいツールを追加した場合は`build.sh`を更新
- `_redirects`ファイルを変更した場合は再デプロイが必要

## 📚 従来のビルド手順（参考用）

### ローカル開発・編集

```bash
# Documentsite フォルダで作業
cd Documentsite

# 依存関係をインストール（初回のみ）
npm ci

# 開発サーバー起動（リアルタイム編集・プレビュー）
npm start
# → http://localhost:3000 でプレビュー可能
```

### ドキュメント編集

- `Documentsite/docs/` 配下の `.md` ファイルを編集
- `Documentsite/docusaurus.config.ts` でサイト設定を変更
- `Documentsite/sidebars.ts` でサイドバー構成を変更
