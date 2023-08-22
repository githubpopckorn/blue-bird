import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const raleway = Raleway({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Clone de el pajaro azul',
  description: 'Creado con 💕 zaint'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
