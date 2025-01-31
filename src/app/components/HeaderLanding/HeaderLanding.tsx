"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import LogoDark from "../../../../public/Logo-dark.png"
import LogoLight from "../../../../public/Logo-light.png"
import { Logo } from "../Logo/Logo"
import { ThemeToggler } from "../ToggleThemeButton/ToggleThemeButton"
import styles from "./HeaderLanding.styles.module.css"

export const Headerlanding = () => {
  const { theme } = useTheme()

  const [loadedTheme, setLoadedTheme] = useState<string | undefined>("system")

  useEffect(() => {
    setLoadedTheme(theme)
  }, [theme])

  const logoSrc = loadedTheme === "dark" ? LogoDark : LogoLight

  return (
    <div className={styles.StyledHeaderLanding}>
      <div className={styles.StyledHeaderLandingContent}>
        <Logo logoSrc={logoSrc} />
        <nav className={styles.StyledNavigationItems}>
          <MenuItem href="#hero" label="Home" />
          <MenuItem href="#features" label="Features" />
          <MenuItem href="#testimonials" label="Testimonials" />
          <MenuItem href="#pricing" label="Pricing" />
        </nav>

        <div className={styles.StyledThemeToggleAndCTAButtonWrapper}>
          <ThemeToggler />
          <button>get started</button>
        </div>
      </div>
    </div>
  )
}

const MenuItem = ({ href, label }: { href: string; label: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <Link
      href={href}
      className={styles.StyledNavigationItem}
      onClick={handleClick}
    >
      {label}
    </Link>
  )
}
