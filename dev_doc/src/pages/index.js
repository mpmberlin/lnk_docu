//index.js
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import "../App.css"

/**
 * Renders the header component for the homepage.
 *
 * @returns {JSX.Element} The rendered header component.
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <h1 className='header-title'> 
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
       
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Checklynx developers`}
      description="Checklyns developers' portal">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
