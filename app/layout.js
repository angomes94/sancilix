import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from "../Components/navbar"
import { LanguageProvider } from '@/app/Context/languangeContext'

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ['latin']
})

export const metadata = {
  title: 'Sancilix',
  description: 'Sancilix - Specializing in residential and commercial projects. Quality craftsmanship, project management, design-build, renovations, and more. Bring your vision to life. Contact us today.',
  keywords: ""
}

export default function RootLayout({ children }) {
  return (
   
    <html >
       <LanguageProvider>
      <body  className={roboto.className}>
        <Navbar/>
        <main>
        {children}
        </main>
       </body>
       </LanguageProvider>
    </html>
    
  )
}
