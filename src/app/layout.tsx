import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Header from "./components/Header/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { lightTheme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "financy",
  description:
    "Manage your finances with ease and get in control of your cashflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
