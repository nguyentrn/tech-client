import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';
import { AnimatePresence } from 'framer-motion';

import store from '../redux/store';
import theme from '../styles/theme';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} key={router.route} />
          </Provider>
        </ChakraProvider>
      </AnimatePresence>
      <style>
        {`
        body {
          padding: 0;
          margin: 0;
          background: #f9fbf8;
        }
      `}
      </style>
    </>
  );
}
