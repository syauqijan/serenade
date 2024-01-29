import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Head from 'next/head'

const playfair = localFont({
  src: [
    {
      path: '../../public/fonts/PlayfairDisplay-VariableFont_wght.ttf',
      weight: '800'
    },

  ],
  variable: '--font-playfair'
})
const biotif = localFont({
  src: [
    {
      path: '../../public/fonts/Biotif-Medium.ttf',
      weight: '800'
    },

  ],
  variable: '--font-biotif'
})

export const metadata: Metadata = {
  title: 'Serenade',
  description: 'Make music matter',
  icons: {
    icon: '/favicon.ico',
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" /> 
        <title>Serenade</title> 
      </Head>
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
