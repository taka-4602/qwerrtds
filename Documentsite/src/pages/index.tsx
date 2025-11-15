import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            ツールガイドを開始
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/getting-started/token-guide"
            style={{marginLeft: '1rem'}}>
            トークン取得方法
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Discordツールの使い方を分かりやすく説明するドキュメントサイト">
      <HomepageHeader />
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--12 margin-bottom--lg text--center">
              <div className="alert alert--info">
                <h3>すべてのツールを一箇所で確認</h3>
                <p>
                  <strong><a href="https://tools.ozeu.net/" target="_blank" rel="noopener noreferrer">OZEU ツール一覧サイト</a></strong> で最新ツールをチェック！
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col--4">
              <h3>🚀 はじめに</h3>
              <p>
                各種ツールの基本的な使い方を学びましょう。
                まずは<Link to="/docs/getting-started/token-guide">トークン取得方法</Link>から始めることをお勧めします。
              </p>
              <Link to="/docs/intro" className="button button--primary">
                ガイドを開始
              </Link>
            </div>
            <div className="col col--4">
              <h3>🛠️ ツール一覧</h3>
              <p>
                <Link to="/docs/tools/dm-spam">DM Spam</Link>、
                <Link to="/docs/tools/raid">Raid</Link>、
                <Link to="/docs/tools/joiner">Joiner</Link>など
                様々なツールの詳細な使用方法を確認できます。
              </p>
              <Link to="/docs/tools/dm-spam" className="button button--primary">
                ツール一覧
              </Link>
            </div>
            <div className="col col--4">
              <h3>📖 用語集</h3>
              <p>
                <Link to="/docs/getting-started/glossary">用語集</Link>で
                専門用語の意味を確認し、
                <Link to="/docs/getting-started/developer-mode">開発者モード</Link>の
                有効化方法も学べます。
              </p>
              <Link to="/docs/getting-started/glossary" className="button button--primary">
                用語集を見る
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
