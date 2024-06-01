import ReactQueryProvider from './reactQueryProvder'
import ThemeRegistry from './registry'
import { notoSansKR } from '@/styles/theme/fonts'
import Header from '@/components/layouts/Header/Header'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ReactQueryProvider>
      <html lang="ko">
        <body className={`${notoSansKR.className}`}>
          <ThemeRegistry options={{ key: 'mui' }}>
            <div id="root" />
            {children}
          </ThemeRegistry>
        </body>
      </html>
    </ReactQueryProvider>
  )
}
