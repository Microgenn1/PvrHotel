import { Poppins, Geist_Mono, Cormorant_SC } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const poppins = Poppins({
  variable: '--font-sans',   // assign to CSS var --font-sans
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

const cormorant = Cormorant_SC({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata = {
  title: 'PVR Hotel',
  description: 'Luxury rooms and comfort – Coimbatore',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} ${cormorant.variable}`}
    >
      <body className="bg-white text-black font-sans">
        <Header />
        <main className=' '>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
