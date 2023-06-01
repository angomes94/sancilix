import { Roboto, Play } from 'next/font/google'

export const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700"],
    subsets: ['latin'],
    variable: "--roboto"
  })

  export const play = Play({
    weight: ["400", "700"],
    subsets: ['latin'],
    variable: "--play"
  }) 
