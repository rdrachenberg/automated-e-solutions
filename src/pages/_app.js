import { Toaster } from 'react-hot-toast';
import AppLayout from 'src/components/Layout'
import 'src/styles/globals.css'



const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }) {
  return (
    
      <AppLayout>
        <Component {...pageProps} />
        <Toaster />
      </AppLayout>
    
    )
  }