import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Tooltip } from "@mui/material";
import styles from "./ToggleThemeButton.styles.module.css";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "light" ? "dark" : "light";

  const determineToolTip = () => {
    if (theme === "light") {
      return "Turn off the light ";
    } else {
      return "Turn on the light ";
    }
  };

  return (
    <Tooltip title={determineToolTip()}>
      <button
        onClick={() => setTheme(nextTheme)}
        className={"header-action-icon"}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    </Tooltip>
  );
}
