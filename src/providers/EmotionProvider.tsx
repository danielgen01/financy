"use client"

import { theme } from "@/styles/theme"
import { css, Global } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"

const GlobalStyle = css`
  body,
  * {
    font-size: 16px;
    margin: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @page {
    size: a4;
    margin: 1.5cm 2.5cm;
  }

  @media print {
    .woot--bubble-holder {
      display: none !important;
    }
  }
`

export default function EmotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      {children}
    </ThemeProvider>
  )
}
