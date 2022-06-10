import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import Layouts from '../layouts';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
