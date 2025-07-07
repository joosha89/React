// import '../index.css'
import type { Metadata } from 'next'
import Link from 'next/link'

/* import indexCss from "./index.module.css" */
import "../styles/index.css"
import TopNavBar from '../components/TopNavBar'

export const metadata: Metadata = {
  title: 'JOOSHA GUITAR',
  description: 'JUST TESTING',
  icons: 'https://example.com/icon.png',
  openGraph: {
    title: 'JOOSHA GUITAR',
    description: 'JUST TESTING',
    url: 'https://example.com',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://example.com/image.png',
        width: 800,
        height: 600,
        alt: 'Image Alt Text',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <link href="./index.module.css"></link> */}
        <TopNavBar />
        <div id="root">{children}</div>
      </body>
    </html>

  )
}