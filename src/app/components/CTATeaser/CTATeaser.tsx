"use client"

import { ArrowForward } from "@mui/icons-material"
import { useRouter } from "next/navigation"

import styles from "./CTATeaser.styles.module.css"

interface CTATeaserProps {
  headlineText: string
  paragraphText: string
}

export const CTATeaser: React.FC<CTATeaserProps> = ({
  headlineText,
  paragraphText,
}) => {
  const router = useRouter()

  return (
    <div className={styles.StyledCTAWrapper}>
      <span className={styles.StyledCTATeaserHeadlineText}>{headlineText}</span>
      <div className={styles.StyledParagraphAndCtaButtonWrapper}>
        <div className={styles.StyledParagraphWrapper}>
          <p className={styles.StyledParagraph}>{paragraphText}</p>
        </div>
        <button
          type="button"
          className={styles.StyledCTAButton}
          onClick={() => router.push("./signup")}
        >
          Join Now Today Free ! <ArrowForward />
        </button>
      </div>
    </div>
  )
}
