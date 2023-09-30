import { Toaster } from 'react-hot-toast';
import AppLayout from 'src/components/Layout'
import FormProvider from 'src/context';
import { Analytics } from '@vercel/analytics/react';
import 'src/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <FormProvider>
      <AppLayout>
        <Component {...pageProps} />
        <Toaster />
        <Analytics />
      </AppLayout>
    </FormProvider>
    )
  }