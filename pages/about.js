import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Profile() {
  return (
    <Layout>
      <h1>About</h1>
      <h2>作った目的</h2>
      <p>このリポジトリの作成目的は…<br />
      </p>
    </Layout>
  );
}