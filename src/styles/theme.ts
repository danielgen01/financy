"use client";
import { createTheme } from "@mui/material/styles";

const themeColors = {
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
};

// Erstelle das Theme
export const theme = createTheme({
  palette: {
    primary: {
      main: themeColors.primaryMain,
    },
    secondary: {
      main: themeColors.secondaryMain,
    },
    text: {
      primary: themeColors.textPrimary,
      secondary: themeColors.icon,
    },
    background: {
      default: themeColors.backgroundDefault,
      paper: themeColors.backgroundWhite,
    },
    success: {
      main: themeColors.success600,
    },
    error: {
      main: themeColors.textRed,
    },
    info: {
      main: themeColors.customBlue,
    },
    warning: {
      main: themeColors.customPurple,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: themeColors.primaryMain,
        },
      },
    },
  },
});
