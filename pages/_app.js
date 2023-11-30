// `pages/_app.js`
import '../styles/global.css';
import Header from '/components/header';
import Footer from '/components/footer';

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
)
}