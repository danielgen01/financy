"use client"

import React from "react"

import styles from "./Homepage.styles.module.css"
import { BenefitSection, HeroSection, PreviewSection } from "./SubComponents"

const Homepage = () => {
  return (
    <div className={styles.StyledHomePageContentWrapper}>
      <HeroSection />
      <PreviewSection />
      <BenefitSection />
    </div>
  )
}

export default Homepage
