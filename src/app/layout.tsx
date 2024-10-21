import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Header from "./components/Header/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { lightTheme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// this function should somehow determine if the user is new on the home page
const checkForInitialHomePage = () => {
  if (typeof window !== "undefined" && window.location.pathname === "/") {
    return true;
  }
  return false;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <NextThemesProvider>
          <ThemeProvider theme={lightTheme}>
            <header>
              <Header />
            </header>
            <main>{children}</main>

            <footer>Footer</footer>
          </ThemeProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
