import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default appWithTranslation(MyApp)