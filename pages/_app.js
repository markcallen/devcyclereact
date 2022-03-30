import { ChakraProvider } from '@chakra-ui/react';
import { withDVCProvider } from '@devcycle/devcycle-react-sdk';
import { theme } from '../theme';
import '../theme/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default withDVCProvider({ envKey: process.env.DevCycleKey })(App);
