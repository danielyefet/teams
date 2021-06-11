/* eslint-disable react/no-danger */
import '../styles.scss';

import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto p-2 max-w-screen-lg">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-65PXEVSDKT" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-65PXEVSDKT');
          `,
        }}
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
