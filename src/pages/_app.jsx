/* eslint-disable react/no-danger */
import '../styles.scss';

import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto p-2 max-w-screen-lg">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
