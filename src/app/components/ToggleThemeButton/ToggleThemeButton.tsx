import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip } from "@mui/material"
import { useTheme } from "next-themes"

export function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  const nextTheme = theme === "light" ? "dark" : "light"

  const determineToolTip = () => {
    if (theme === "light") {
      return "Turn off the light"
    }
    return "Turn on the light"
  }

  const image = theme === "dark" ? faSun : faMoon

  return (
    <Tooltip title={determineToolTip()}>
      <button
        onClick={() => setTheme(nextTheme)}
        className="header-action-icon"
      >
        <FontAwesomeIcon icon={image} width={40} height={40} size="2x" />
      </button>
    </Tooltip>
  )
}
