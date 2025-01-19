"use client"

import { createTheme } from "@mui/material/styles"

const themeColorsLight = {
  primaryMain: "#5854C0",
  secondaryMain: "#D92D20",
  textPrimary: "#101828",
  backgroundDefault: "#F2F6FD",
  backgroundWhite: "#FFFFFF",
  icon: "#778499",
  line: "#E5E9F0",
  customGreen: "#14AF9C",
  customBlue: "#3477F5",
  customPurple: "#9E4BF6",
  inactive: "#778499",
  items: "#37383C",
  success600: "#0B9055",
  textGreen: "#0B9055",
  textRed: "#D92D20",
}

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: themeColorsLight.primaryMain,
    },
    secondary: {
      main: themeColorsLight.secondaryMain,
    },
    text: {
      primary: themeColorsLight.textPrimary,
      secondary: themeColorsLight.icon,
    },
    background: {
      default: themeColorsLight.backgroundDefault,
      paper: themeColorsLight.backgroundWhite,
    },
    success: {
      main: themeColorsLight.success600,
    },
    error: {
      main: themeColorsLight.textRed,
    },
    info: {
      main: themeColorsLight.customBlue,
    },
    warning: {
      main: themeColorsLight.customPurple,
    },
  },
})
