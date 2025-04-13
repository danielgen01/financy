import "./global.css"
// eslint-disable-next-line import/no-extraneous-dependencies
import "@fortawesome/fontawesome-svg-core/styles.css"

import { ThemeProvider } from "@mui/material"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { lightTheme } from "./theme"

const inter = Inter({ subsets: ["latin"] })

export const metaData: Metadata = {
  applicationName: "financy",
  title: "Financy - Build your wealth and track your incomes and expenses",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemesProvider>
          <ThemeProvider theme={lightTheme}>
            <header>
              {" "}
              <Header />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </ThemeProvider>
        </NextThemesProvider>
      </body>
    </html>
  )
}
