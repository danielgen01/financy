"use client"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { LayoutSection } from "@/app/components/LayoutSection/LayoutSection"
import { H1 } from "@/app/components/Typography/H1/H1"
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph"

import PreviewLight from "../../../../../public/Financy-preview.png"
import PreviewDark from "../../../../../public/FinancyDark-preview.png"
import styles from "./HeroSection.styles.module.css"

export const HeroSection: React.FC = () => {
  return (
    <LayoutSection id="hero">
      <div className={styles.StyledHeroSection}>
        <H1>
          Manage your{" "}
          <span className={styles.StyledHighlightedSpan}>Finances </span>
          with ease
        </H1>
        <Paragraph>
          Our powerful platform helps you take control of your income, expenses{" "}
          assets, and liabilities, all in one place
        </Paragraph>
        <Link href="/auth" className={styles.StyledLink}>
          Get started
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <PreviewSection />
      </div>
    </LayoutSection>
  )
}

export const PreviewSection: React.FC = () => {
  const { theme } = useTheme()
  const [loadedTheme, setLoadedTheme] = useState<string | undefined>("system")

  useEffect(() => {
    setLoadedTheme(theme)
  }, [theme])

  const imageSrc = loadedTheme === "dark" ? PreviewDark : PreviewLight

  return (
    <LayoutSection id="#hero">
      <div className={styles.StyledPreviewSection}>
        <div className={styles.StyledImagePreviewWrapper}>
          <Image
            src={imageSrc}
            alt="Preview_of_financy"
            className="ResponsiveImage"
            placeholder="blur"
          />
        </div>
      </div>
    </LayoutSection>
  )
}
