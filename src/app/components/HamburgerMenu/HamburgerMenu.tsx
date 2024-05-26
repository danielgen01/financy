import { useState } from "react"
import styles from "./HamburgerMenu.styles.module.css"
import MenuItem from "../Header/MenuItem"
import { ClickAwayListener } from "@mui/material"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClickAway = () => {
    if (isOpen) {
      setIsOpen(false)
    }
    console.log("click away")
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
          <div></div>
        </div>
        <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
          <div>
            <div>
              <ul>
                <MenuItem  href="/" label="Home" />
                <MenuItem  href="/" label="About" />
                <MenuItem  href="/" label="Services" />
                <MenuItem  href="/" label="Contact" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default HamburgerMenu
