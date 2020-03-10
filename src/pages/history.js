import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Index${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <h1>Hello World!</h1>
      </main>
    </Layout>
  );
}

export default Home;
