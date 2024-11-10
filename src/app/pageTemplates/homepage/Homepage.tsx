import React from "react"

import { BenefitSection } from "./BenefitSection/BenefitSection"
import styles from "./Homepage.styles.module.css"
import { PricingSection } from "./PricingSection/PricingSection"
import {
  CTASection,
  HeroSection,
  PreviewSection,
  TestimonalSection,
} from "./SubComponents"

const Homepage = () => {
  return (
    <div className={styles.StyledHomePageContentWrapper}>
      <HeroSection />
      <PreviewSection />
      <BenefitSection />
      <CTASection />
      <TestimonalSection />
      <PricingSection />
    </div>
  )
}

export default Homepage
