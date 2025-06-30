import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import '../styles/globals.css';
import { ContactInfoProvider } from '../../context/ContactInfoContext';


function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ContactInfoProvider>

        <Component {...pageProps} />
      </ContactInfoProvider>
    </QueryClientProvider>
  );
}

export default MyApp;