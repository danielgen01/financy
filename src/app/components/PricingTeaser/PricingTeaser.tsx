import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

import Paragraph from "../Typography/Paragraph/Paragraph"
import styles from "./PricingTeaser.styles.module.css"

interface PricingTeaserProps {
  advantageItems: string[]
}

export const PricingTeaser: React.FC<PricingTeaserProps> = ({
  advantageItems,
}) => {
  return (
    <div className={styles.StyledPricingTeaser}>
      <div className={styles.StyledPricingTeaserContent}>
        <div className={styles.StyledTeaserHeader}>
          <p>Free TRial Banner</p>
          <div className={styles.StyledPriceAndIntervalWrapper}>
            <span className={styles.StyledPriceText}>Free</span>
            <span className={styles.StyledIntervallText}>/month</span>
          </div>
        </div>
        <div className={styles.StyledParagraphWrapper}>
          <Paragraph>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            nostrum voluptatum vel in reiciendis voluptates reprehenderit alias
            eos voluptatibus delectus velit nemo, nesciunt quia aperiam at autem
            dolorem tempora fugiat!
          </Paragraph>
        </div>
        <div className={styles.StyledTeaserBody}>
          <ul className={styles.StyledAdvantageListWrapper}>
            {advantageItems.map((item) => (
              <div className={styles.StyledListItemWrapper} key={item.id}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                />
                <li className={styles.StyledListItem}>{item}</li>
              </div>
            ))}
          </ul>
          <Link href="/signup" className={styles.StyledBookNowButton}>
            Book now
          </Link>
        </div>
      </div>
    </div>
  )
}
