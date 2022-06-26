import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../public/components/layout'
import "bootstrap/dist/css/bootstrap.min.css"
import Script from 'next/script'
function MyApp({ Component, pageProps }: AppProps) {

  return <>
  <Layout>
  <Component {...pageProps} />

  </Layout>
  <Script src='bootstrap/dist/js/bootstrap.min.js'/>
  <Script src='jquery/dist/jquery.min.js'/>
  </>
  }
  

export default MyApp
