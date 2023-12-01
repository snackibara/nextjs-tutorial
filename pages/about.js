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
      next.jsの学習です。
      </p>
      <p>まずはnext.jsのチュートリアル（<a href="https://nextjs.org/learn-pages-router/basics/create-nextjs-app">ここ</a>）を一通りやってみて、その後レイアウトを変更したりページを足したりして瑛ます。</p>
      <p>なので、元々のファイルにあったものが残っているとか、表示や動きの確認のためにテキストやファイルを足しているので未完成で内容はテキトーです。</p>
    </Layout>
  );
}