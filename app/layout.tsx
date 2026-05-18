import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Recipe Finder',
  description: 'Find delicious recipes by ingredients',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
