import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderWrapper from '../layouts/header-wrapper/HeaderWrapper'


function MyApp({ Component, pageProps, ...appProps }: AppProps) {

  if (["/contact"].includes(appProps.router.pathname)) {
    return (
      <Component {...pageProps} />
    )
  }

  return (
    <HeaderWrapper>
      <Component {...pageProps} />
    </HeaderWrapper>
  )
}

export default MyApp
