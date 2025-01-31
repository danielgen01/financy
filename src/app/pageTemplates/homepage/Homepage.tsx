import React from "react"

import { OvalShapeFigure } from "@/app/components/OvalShapeFigure/OvalShapeFigure"

import { BenefitSection } from "./BenefitSection/BenefitSection"
import { CTASection } from "./CTASection/CTASection"
import { HeroSection } from "./HeroSection/HeroSection"
import { PricingSection } from "./PricingSection/PricingSection"
import { TestimonalSection } from "./TestimonialSection/TestimonialSection"

const Homepage = () => {
  return (
    <>
      <OvalShapeFigure className="StyledOvalFadeShapeLeft" />
      <OvalShapeFigure className="StyledOvalFadeShapeRight" />
      <HeroSection />
      <BenefitSection />
      <CTASection />
      <TestimonalSection />
      <PricingSection />
    </>
  )
}

export default Homepage
