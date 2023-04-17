import * as React from 'react'
import type { AppProps } from 'next/app'
import { CacheProvider, type EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { store, persistor } from '../store/AppStore'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import createEmotionCache from '../config/emotionCache'
import '../assets/css/global.scss'
import theme from '../config/theme'
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: React.FC<Pick<AppProps, 'pageProps'>>
}

const clientSideEmotionCache = createEmotionCache()

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </ReduxProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
