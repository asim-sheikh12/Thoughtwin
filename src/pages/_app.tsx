import type { AppProps } from 'next/app';
import Layouts from '../layouts';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}

export default MyApp;
