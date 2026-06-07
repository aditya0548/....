import type { Metadata } from 'next'
import { Inter, Playfair_Display, Lora, Crimson_Text } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const crimson = Crimson_Text({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-crimson' })

export const metadata: Metadata = {
  title: 'TIA STUDIO | Animation & Storytelling',
  description: 'Cinematic portfolio of adi — animator, storyteller, and developer from Ahmednagar, India.',
  keywords: ['animation', 'storytelling', 'portfolio', 'web development'],
  authors: [{ name: 'adi', url: 'https://theintrovertanimates.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tia-studio.vercel.app',
    title: 'TIA STUDIO | Animation & Storytelling',
    description: 'Cinematic portfolio exploring loss, forgiveness, and the art of storytelling.',
    images: [
      {
        url: 'https://tia-studio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${lora.variable} ${crimson.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
