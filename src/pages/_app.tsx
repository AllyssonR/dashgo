import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { SidebarDrawerProvider } from '../Context/SidebarDrawerContext'
function MyApp({ Component, pageProps }: AppProps) {
  /*passei um tempão para lembrar que tem que passar o contexto na pasta app da aplicação*/
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
