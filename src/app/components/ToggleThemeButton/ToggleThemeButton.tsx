import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

export const ToggleTheme: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark"
    console.log("Initial theme:", isDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDark)
    setIsDarkMode(isDark)
  }, [])

  function toggleDarkMode() {
    const newIsDarkMode = !isDarkMode
    console.log("Toggling theme to:", newIsDarkMode ? "dark" : "light")

    document.documentElement.classList.toggle("dark", newIsDarkMode)
    localStorage.setItem("theme", newIsDarkMode ? "dark" : "light")
    setIsDarkMode(newIsDarkMode)
    console.log(localStorage.getItem("theme"))
  }

  return (
    <div className="toggle-theme-container px-5">
      <div className="toggle-theme-content flex justify-between bg-bright-gray h-10 px-5 items-center dark:bg-dark-black rounded-md">
        <FontAwesomeIcon icon={faSun} />
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer
              ${isDarkMode ? "translate-x-[100%]" : ""} duration-200 transform`}
            onChange={toggleDarkMode}
            checked={isDarkMode}
          />
          <label
            htmlFor="toggle"
            className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
              isDarkMode ? "bg-dark-purple" : "bg-gray-300"
            }`}
          ></label>
        </div>
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </div>
  )
}
