import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=BioRhyme:wght@200;300;400;700;800&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Podkova:wght@400;500;600;700;800&display=swap'
            rel='stylesheet'
          />
          <script
            src='https://kit.fontawesome.com/5794ad2a68.js'
            crossOrigin='anonymous'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
