import {
  Head, Html, Main, NextScript,
} from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);
export default Document;
