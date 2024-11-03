import "./global.css"
// eslint-disable-next-line import/no-extraneous-dependencies
import "@fortawesome/fontawesome-svg-core/styles.css"

import { ThemeProvider } from "@mui/material"
import { Inter } from "next/font/google"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import { lightTheme } from "@/styles/theme"

import Header from "./components/Header/Header"

const inter = Inter({ subsets: ["latin"] })

// this function should somehow determine if the user is new on the home page
const checkForInitialHomePage = () => {
  if (typeof window !== "undefined" && window.location.pathname === "/") {
    return true
  }
  return false
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
              <Header />
            </header>
            <main>
              {/* <OvalShapeFigureLeft />
              <OvalShapeFigureRight /> */}
              {children}
            </main>

            <footer>Footer</footer>
          </ThemeProvider>
        </NextThemesProvider>
      </body>
    </html>
  )
}
