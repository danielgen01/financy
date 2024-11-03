"use server"

import React from "react"

import styles from "./Homepage.styles.module.css"
import {
  BenefitSection,
  CTASection,
  HeroSection,
  PreviewSection,
} from "./SubComponents"

const Homepage = () => {
  return (
    <div className={styles.StyledHomePageContentWrapper}>
      <HeroSection />
      <PreviewSection />
      <BenefitSection />
      <CTASection />
    </div>
  )
}

export default Homepage
