import Layout from '../components/Layout';
import '../styles/global.scss';
import CopyEmailContextProvider from '../context/copy-email';

function MyApp({ Component, pageProps }) {
  return (
    <CopyEmailContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CopyEmailContextProvider>
  );
}

export default MyApp;
