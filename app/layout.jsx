import './globals.css'
import React from "react"
import { roboto } from '@/lib/fonts'
import Navbar from "../components/Navbar"
import { LanguageProvider } from '@/app/context/languangeContext'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export const metadata = {
  title: 'Sancilix',
  description: 'Sancilix - Specializing in residential and commercial projects. Quality craftsmanship, project management, design-build, renovations, and more. Bring your vision to life. Contact us today.',
  keywords: "",
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (

    <html >
      <LanguageProvider>
        <body className={roboto.className}>
            <main>
              {children}
            </main>
        </body>
      </LanguageProvider>
    </html>

  )
}
