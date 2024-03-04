import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Golosinas Imports',
  description:
    'Golosinas Imports é uma plataforma exclusiva dedicada à importação e distribuição de uma vasta gama de deliciosos alfajores argentinos para o mercado brasileiro. Nossa paixão está em trazer para os amantes de doces brasileiros a autenticidade e a qualidade incomparável dos alfajores argentinos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
