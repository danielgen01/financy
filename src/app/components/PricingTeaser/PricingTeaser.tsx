import {
  faArrowUpRightFromSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

import Paragraph from "../Typography/Paragraph/Paragraph"
import styles from "./PricingTeaser.styles.module.css"

export interface PricingTeaserProps {
  advantageItems: string[]
  price: string | number
  interval: string
  variant?: string | "free" | "basic" | "premium"
  label?: string
}
export interface VariantProps {
  variant?: string | "free" | "basic" | "premium"
  label: string
}

export const Flag: React.FC<VariantProps> = ({ label, variant }) => {
  const getVariantColorFlag = () => {
    if (variant === "free") {
      return `${styles.freeVariant}`
    }
    if (variant === "basic") {
      return styles.basicVariant
    }
    if (variant === "premium") {
      return styles.premiumVariant
    }
  }

  const flagClassNames = `${styles.StyledFlagTopLeft} ${getVariantColorFlag()}`

  return <div className={flagClassNames}>{label}</div>
}

export const PricingTeaser: React.FC<PricingTeaserProps> = ({
  advantageItems,
  price,
  interval,
  variant,
  label,
}) => {
  return (
    <div className={styles.StyledPricingTeaser}>
      <div className={styles.StyledPricingTeaserContent}>
        <div className={styles.StyledTeaserHeader}>
          <Flag variant={variant} label={label || ""} />
          <div className={styles.StyledPriceAndIntervalWrapper}>
            <span className={styles.StyledPriceText}>{price}</span>
            <span className={styles.StyledIntervallText}>{interval}</span>
          </div>
        </div>
        <div className={styles.StyledParagraphWrapper}>
          <Paragraph className={styles.StyledParagraph}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          </Paragraph>
        </div>
        <div className={styles.StyledTeaserBody}>
          <ul className={styles.StyledAdvantageListWrapper}>
            {advantageItems.map((item) => (
              <div className={styles.StyledListItemWrapper} key={item}>
                <FontAwesomeIcon
                  className={styles.StyledFontAwesomeIcon}
                  icon={faCheck}
                />
                <li className={styles.StyledListItem}>{item}</li>
              </div>
            ))}
          </ul>
          <Link
            href="/signup"
            className={styles.StyledBookNowButton}
            type="button"
            target="_blank"
          >
            Book now
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
      </div>
    </div>
  )
}
