import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// SVG Icons
const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const IconBlog = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    <path d="M2 2l7.586 7.586"></path>
    <circle cx="11" cy="11" r="2"></circle>
  </svg>
);

const IconCommand = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
  </svg>
);

function Hero() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>ws</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <p className={styles.tagline}>
          记录学习笔记，分享技术文章<br/>
          探索前端开发、服务器运维的经验心得
        </p>
        <div className={styles.buttonGroup}>
          <Link className={styles.buttonPrimary} to="/docs/intro">
            <IconBook />
            <span>开始阅读</span>
          </Link>
          <Link className={styles.buttonSecondary} to="/blog">
            <IconBlog />
            <span>浏览博客</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Feature({title, description, icon: IconComponent, link}) {
  return (
    <Link to={link} className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <IconComponent />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </Link>
  );
}

function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresGrid}>
        <Feature
          icon={IconBook}
          title="前端开发"
          description="React、Vue、JavaScript 等前端技术笔记"
          link="/docs/category/fe"
        />
        <Feature
          icon={IconCommand}
          title="服务端运维"
          description="Linux、Docker、Pi 集群等运维经验"
          link="/docs/category/misc"
        />
        <Feature
          icon={IconCommand}
          title="常用命令"
          description="Git、CentOS、Unix 等常用命令速查"
          link="/docs/category/common-commands"
        />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>50+</div>
          <div className={styles.statLabel}>技术文章</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>3</div>
          <div className={styles.statLabel}>专栏分类</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>∞</div>
          <div className={styles.statLabel}>持续更新</div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ws2vs 的个人技术博客和文档站">
      <main>
        <Hero />
        <Stats />
        <Features />
      </main>
    </Layout>
  );
}
