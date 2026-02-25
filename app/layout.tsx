import type { Metadata } from 'next'
import { Poppins, Pacifico } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
})

export const metadata: Metadata = {
  title: 'Hey There!',
  description: 'A special surprise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${pacifico.variable}`}>{children}</body>
    </html>
  )
}
