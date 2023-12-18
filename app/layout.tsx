import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	weight: ["100", "200", "400", "700", "900"],   
	display: "swap",
	subsets: ["latin"],
	variable: "--poppins-font",
  });


export const metadata: Metadata = {
  title: 'Matteo De Giuseppe',
  description: `Matteo De Giuseppe's portfolio`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <link rel="icon" href="/icon.ico" sizes="any" />
{children}
</body>
    </html>
  )
}
