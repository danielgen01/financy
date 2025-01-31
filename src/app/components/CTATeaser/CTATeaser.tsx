"use client"

import { ArrowForward } from "@mui/icons-material"
import Link from "next/link"

import styles from "./CTATeaser.styles.module.css"

interface CTATeaserProps {
  headlineText: string
  paragraphText: string
}

export const CTATeaser: React.FC<CTATeaserProps> = ({
  headlineText,
  paragraphText,
}) => {
  return (
    <div className={styles.StyledCTAWrapper}>
      <span className={styles.StyledCTATeaserHeadlineText}>{headlineText}</span>
      <div className={styles.StyledParagraphAndCtaButtonWrapper}>
        <div className={styles.StyledParagraphWrapper}>
          <p className={styles.StyledParagraph}>{paragraphText}</p>
        </div>
        <Link href="/auth" className={styles.StyledCTAButton}>
          Join Now Today Free ! <ArrowForward />
        </Link>
      </div>
    </div>
  )
}
