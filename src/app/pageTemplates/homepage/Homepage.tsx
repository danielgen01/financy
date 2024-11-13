import React from "react"

import { BenefitSection } from "./BenefitSection/BenefitSection"
import { CTASection } from "./CTASection/CTASection"
import { HeroSection } from "./HeroSection/HeroSection"
import styles from "./Homepage.styles.module.css"
import { PricingSection } from "./PricingSection/PricingSection"
import { TestimonalSection } from "./TestimonialSection/TestimonialSection"

const Homepage = () => {
  return (
    <div className={styles.StyledHomePageContentWrapper}>
      <HeroSection />
      <BenefitSection />
      <CTASection />
      <TestimonalSection />
      <PricingSection />
    </div>
  )
}

export default Homepage
