import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jack Hammer App',
  description: 'Generated by create next app',
  icons: {
    icon: "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/hammer.png",
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
