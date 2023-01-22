import { ThemeProvider, Preflight } from '@xstyled/emotion';
import Head from 'next/head';

// Next: Styles
import { GlobalStyle, HeraxiaTheme } from '../styles/Theme';

// Next: App
export default function App({ Component, ...pageProps }) {
  return (
    <ThemeProvider theme={HeraxiaTheme}>
      <Head>
        <title>Heraxia - Minimap</title>
      </Head>
      <Preflight />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
