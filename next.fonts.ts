import { IBM_Plex_Mono, Open_Sans } from "next/font/google"

export const fontSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  display: "fallback",
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
})
