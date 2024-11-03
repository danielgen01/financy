import React from "react"

import styles from "./Homepage.styles.module.css"
import {
  BenefitSection,
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
    </div>
  )
}

export default Homepage
