import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from "../components/Layout/Layout"
import store from '../store/store'
import { Provider } from 'react-redux'

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ducat India - Campus &amp; Industrial IT Training  School in Noida</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
