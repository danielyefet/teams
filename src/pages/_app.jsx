import '../styles.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto p-2 max-w-screen-lg">
      <Component {...pageProps} />
    </div>
  );
}
