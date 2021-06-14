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
      <div className="h-9 flex items-center p-2 mt-2">
        <a className="h-full mr-2" href="https://danielyefet.medium.com"><img className="h-full" src="/social-icons/medium.svg" alt="Medium" /></a>
        <a className="h-full mr-2" href="https://twitter.com/danyefet"><img className="h-full" src="/social-icons/github.svg" alt="Twitter" /></a>
        <a className="h-full" href="https://github.com/danielyefet/teams"><img className="h-full" src="/social-icons/twitter.svg" alt="GitHub" /></a>
      </div>
    </div>
  );
}
