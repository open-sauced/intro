import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>The Open Source Education Path with OpenSauced</h1>
        <p className={styles.heroSubtitle}>Empowering Your Open Source Journey: From First Contribution to Project Leadership</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Welcome to OpenSauced Education Path">
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>Intro to Open Source Course</h3>
                <p>This course is designed to equip you with the skills and knowledge you need to contribute to open source projects.</p>
                <Link className={styles.cardLink} to="/docs/intro-to-oss">
                  Start the Intro to Open Source Course
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>Becoming a Maintainer</h3>
                <p>This course is designed to aid people who are interested in becoming open source project maintainers.</p>
                <Link className={styles.cardLink} to="/docs/becoming-a-maintainer">
                  Start the Becoming a Maintainer Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}