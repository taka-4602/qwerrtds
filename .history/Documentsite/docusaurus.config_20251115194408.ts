import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OZEU ドキュメント',
  tagline: 'ツールの使い方をわかりやすく説明',
  favicon: 'img/favicon.ico',

  // GitHub Pagesのサブパス配信に対応
  url: 'https://tools.ozeu.net', // メインドメイン
  baseUrl: '/help/',             // /help/ サブパスで配信

  organizationName: 'hirorogo',
  projectName: 'ozeu',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, 
  },

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // サイドバー設定のみ残し、editUrlは未設定にすることで
          // 「Edit this page」リンクを全体で非表示にする
          sidebarPath: './sidebars.ts',
          // editUrl: 'https://github.com/hirorogo/ozeu/tree/main/Documentsite/', // 削除
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // クライアント実行時に読み込む追加モジュール（チャンク読み込み失敗時の自動リロードなど）
  clientModules: [
    require.resolve('./src/client-modules/chunk-reload.ts'),
  ],

  themeConfig: {
    // ソーシャルカード画像の設定（リンクプレビューで表示される画像）
    image: 'img/ozeu-social-card.png',
    
    // メタデータの詳細設定
    metadata: [
      {name: 'keywords', content: 'Discord, ツール, スパム, DM, Raid, トークン, 荒らし'},
      {name: 'description', content: 'おぜうの集い荒兵器公式Document！'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'OZEU '},
      {name: 'twitter:description', content: 'おぜうの集い荒兵器公式Document！'},
      // 共有時の絶対URLもサブパスに対応
      {name: 'twitter:image', content: 'https://tools.ozeu.net/help/img/ozeu-social-card.png'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'OZEU  - Discord荒らし'},
      {property: 'og:description', content: 'おぜうの集い荒兵器公式Document！'},
      {property: 'og:image', content: 'https://tools.ozeu.net/help/img/ozeu-social-card.png'},
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '630'},
      {property: 'og:url', content: 'https://tools.ozeu.net/help/'},
      {property: 'og:locale', content: 'ja_JP'},
      {property: 'og:site_name', content: 'OZEU Document'},
    ],

    navbar: {
      // サイトタイトル
      title: 'OZEU ドキュメント',
      logo: {
        // ロゴのalt属性
        alt: 'OZEU ドキュメント Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'ツールガイド',
        },
        {
          // GitHubリンク
          href: 'https://github.com/hirorogo/ozeu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: 'ツールガイド',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'コミュニティ',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/hirorogo/ozeu/issues',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/hirorogo/ozeu/discussions',
            },
          ],
        },
        {
          title: 'その他',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hirorogo/ozeu',
            },
          ],
        },
      ],
      // コピーライト表示
      copyright: `Copyright © ${new Date().getFullYear()} OZEU ドキュメント. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
