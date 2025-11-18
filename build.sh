#!/bin/bash
# OZEU統合ビルドスクリプト

set -e  # エラーで停止

echo "🔨 OZEU統合ビルドを開始します..."

# 古いビルドディレクトリを削除
echo "📁 古いビルドをクリア中..."
rm -rf build

# DocusaurusプロジェクトをビルD
echo "📚 Docusaurusサイトをビルド中..."
cd Documentsite
npm install
npm run build
cd ..

# Docusaurusビルドをルートレベルにコピー
echo "📋 Docusaurusビルドをコピー中..."
cp -r Documentsite/build .

# Docusaurusのindex.htmlをdocs.htmlとしてバックアップ
echo "📚 Docusaurusメインページをバックアップ中..."
mv build/index.html build/docs.html

# ツール用ディレクトリを作成
echo "🛠️ ツールディレクトリを作成中..."
mkdir -p build/tools

# 全ツールをbuild/tools/にコピー
echo "🚀 ツールをコピー中..."
cp -r raider joiner dm-spammer group-dm-spammer invite-braker reaction-spammer slash-command-auto status-setter token-checker webhook-spammer build/tools/

# ツールポータルをindex.htmlとしてコピー（ルートページ）
echo "🏠 ツールポータルをルートにコピー中..."
cp index.html build/index.html

# Cloudflare Pagesリダイレクト設定をコピー
echo "🔄 リダイレクト設定をコピー中..."
cp _redirects build/

echo "✅ 統合ビルドが完了しました！"
echo ""
echo "📂 ビルドディレクトリ: ./build/"
echo "🌐 テスト方法:"
echo "   cd build && python3 -m http.server 3000"
echo "   ブラウザで http://localhost:3000/ を開く"
echo ""
echo "🚀 Cloudflare Pagesデプロイ:"
echo "   Build command: ./build.sh"
echo "   Build output directory: build"
