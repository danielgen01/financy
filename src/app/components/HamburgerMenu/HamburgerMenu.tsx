import { ClickAwayListener } from "@mui/material"
import { useState } from "react"

import MenuItem from "../Header/MenuItem"
import styles from "./HamburgerMenu.styles.module.css"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClickAway = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.menuWrap}>
        <input
          type="checkbox"
          className={styles.toggler}
          checked={isOpen}
          onChange={toggleMenu}
        />
        <div className={styles.hamburger}>
          <div />
        </div>
        <div
          className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}
          onClick={() => handleClickAway()}
        >
          <div>
            <div>
              <ul>
                <MenuItem href="/" label="Home" />
                <MenuItem href="/" label="About" />
                <MenuItem href="/" label="Services" />
                <MenuItem href="/" label="Contact" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default HamburgerMenu
