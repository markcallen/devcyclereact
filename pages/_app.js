<<<<<<< Updated upstream
import '../styles/globals.css';
=======
import '../styles/globals.css'
import { withDVCProvider } from '@devcycle/devcycle-react-sdk'
>>>>>>> Stashed changes

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

<<<<<<< Updated upstream
export default MyApp;
=======
export default withDVCProvider({ envKey: process.env.DevCycleKey })(MyApp)
>>>>>>> Stashed changes
