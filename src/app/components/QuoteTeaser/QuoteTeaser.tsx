import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Rating } from "@mui/material"
import React from "react"

import Paragraph from "../Typography/Paragraph/Paragraph"
import styles from "./QuoteTeaser.styles.module.css"

export interface QuoteTeaserProps {
  starCount: number
  testimonialText: string
}

export const QuoteTeaser: React.FC<QuoteTeaserProps> = ({
  starCount,
  testimonialText,
}) => {
  return (
    <div className={styles.StyledQuoteTeaser}>
      <Rating name="read-only" value={starCount} readOnly />
      <p className={styles.StyledParagraph}>{testimonialText}</p>
      <div className={styles.StyledRoofer}>
        <div className={styles.StyledAvatarAndTextWrapper}>
          <Avatar src="./profile.png" />
          <div className={styles.StyledNameAndRole}>
            <h4>Daniel</h4>
            <Paragraph>Software Developer</Paragraph>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faQuoteRight}
          size="3x"
          className={styles.StyledQuoteIcon}
        />
      </div>
    </div>
  )
}
