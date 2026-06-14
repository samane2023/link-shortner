import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Link Shortener',
  description: 'A full-stack URL shortener built with Next.js and PostgreSQL',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
