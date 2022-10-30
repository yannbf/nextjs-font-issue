import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { raleway } from '../fonts'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <div className={raleway.className}>
    <Component {...pageProps} />
  </div>
}
