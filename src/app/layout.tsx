import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import localFont from 'next/font/local'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
