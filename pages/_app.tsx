import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import HeaderWrapper from '../layouts/header-wrapper/HeaderWrapper'
import { store } from '../redux/store'


function MyApp({ Component, pageProps, ...appProps }: AppProps) {

  if (["/contact"].includes(appProps.router.pathname)) {
    return (
      <Component {...pageProps} />
    )
  }

  return (
    <HeaderWrapper>
       <Provider store={store}>
         <Component {...pageProps} />
       </Provider>
    </HeaderWrapper>
  )
}

export default MyApp
