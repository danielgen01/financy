import { LayoutSection } from "@/app/components/LayoutSection/LayoutSection"
import { PricingTeaser } from "@/app/components/PricingTeaser/PricingTeaser"
import { H3 } from "@/app/components/Typography/H3/H3"
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph"

import styles from "./PricingSection.styles.module.css"

export const PricingSection = () => {
  return (
    <LayoutSection className={styles.StyledPricingTeaserSection}>
      <div className={styles.StyledContentWrapper}>
        <H3>Pricing plan for everyone</H3>
        <Paragraph>find the corret abbo for you</Paragraph>
        <div className={styles.StyledPricingTeasersWrapper}>
          <PricingTeaser
            advantageItems={[
              "item1",
              "item2",
              "item3",
              "item4",
              "item5",
              "item6",
            ]}
            price="Free"
            interval="/month"
          />
          <PricingTeaser
            advantageItems={[
              "item1",
              "item2",
              "item3",
              "item4",
              "item5",
              "item6",
            ]}
            price="€25"
            interval="/month"
          />
          <PricingTeaser
            advantageItems={[
              "item1",
              "item2",
              "item3",
              "item4",
              "item5",
              "item6",
            ]}
            price="€50"
            interval="/month"
          />
        </div>
      </div>
    </LayoutSection>
  )
}
