import type { ImageProps } from "next/image"
import Image from "next/image"

import Paragraph from "../Typography/Paragraph/Paragraph"
import styles from "./BigBenefitTeaser.styles.module.css"

interface BigBenefitTeaserProps {
  image: ImageProps
  headlineText: string
  paragraphText: string
}

export const BigBenefitTeaser: React.FC<BigBenefitTeaserProps> = ({
  image,
  headlineText,
  paragraphText,
}) => {
  return (
    <div className={styles.StyledImageWrapper}>
      <span className={styles.StyledBigTeaserHeadlineText}>{headlineText}</span>
      <Paragraph>{paragraphText}</Paragraph>
      <Image {...image} alt={image.alt || "default_alt_text"} />
    </div>
  )
}
