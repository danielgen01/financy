import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Tooltip } from "@mui/material";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "light" ? "dark" : "light";

  const determineToolTip = () => {
    if (theme === "light") {
      return "Turn on the light ";
    } else {
      return "Turn off the light ";
    }
  };

  return (
    <Tooltip title={determineToolTip()}>
      <button onClick={() => setTheme(nextTheme)}>
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    </Tooltip>
  );
}
