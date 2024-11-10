"use client"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { BenefitTeaser } from "@/app/components/BenefitTeaser/BenefitTeaser"
import { BigBenefitTeaser } from "@/app/components/BigBenefitTeaser/BigBenefitTeaser"
import { CTATeaser } from "@/app/components/CTATeaser/CTATeaser"
import { LayoutSection } from "@/app/components/LayoutSection/LayoutSection"
import { PricingTeaser } from "@/app/components/PricingTeaser/PricingTeaser"
import { QuoteTeaser } from "@/app/components/QuoteTeaser/QuoteTeaser"
import { H1 } from "@/app/components/Typography/H1/H1"
import { H2 } from "@/app/components/Typography/H2/H2"
import { H3 } from "@/app/components/Typography/H3/H3"
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph"

import AnalyticsDark from "../../../../public/analytics_dark.png"
import AnalyticsLigth from "../../../../public/analytics_light.png"
import CyberSecurityImage from "../../../../public/cyber_secrurity.png"
import PreviewLight from "../../../../public/Financy-preview.png"
import PreviewDark from "../../../../public/FinancyDark-preview.png"
import InsightsDark from "../../../../public/insights_dark.png"
import InsightsLight from "../../../../public/insights_light.png"
import DarkReport from "../../../../public/report_dark.png"
import LightReport from "../../../../public/report_light.png"
import TrackingImage from "../../../../public/tracking.png"
import styles from "./SubComponents.styles.module.css"

export const HeroSection: React.FC = () => {
  return (
    <LayoutSection>
      <div className={styles.StyledHeroSection}>
        <H1>
          Manage your{" "}
          <span className={styles.StyledHighlightedSpan}>Finances </span>
          with ease
        </H1>
        <Paragraph>
          Our powerful platform helps you take control of your income, expenses{" "}
          assets, and liabilities, all in one place
        </Paragraph>
        <Link href="/signup" className={styles.StyledLink}>
          Get started
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </LayoutSection>
  )
}

export const PreviewSection: React.FC = () => {
  const { theme } = useTheme()
  const [loadedTheme, setLoadedTheme] = useState<string | undefined>("system")

  useEffect(() => {
    setLoadedTheme(theme)
  }, [theme])

  const imageSrc = loadedTheme === "dark" ? PreviewDark : PreviewLight

  return (
    <LayoutSection>
      <div className={styles.StyledPreviewSection}>
        <div className={styles.StyledImagePreviewWrapper}>
          <Image
            src={imageSrc}
            alt="Preview_of_financy"
            className="ResponsiveImage"
            placeholder="blur"
          />
        </div>
      </div>
    </LayoutSection>
  )
}

export const BenefitSection = () => {
  const { theme } = useTheme()
  const [loadedTheme, setLoadedTheme] = useState<string | undefined>("system")

  useEffect(() => {
    setLoadedTheme(theme)
  }, [theme])

  const imageSrcReport = loadedTheme === "dark" ? DarkReport : LightReport
  const imageSrcAnalytics =
    loadedTheme === "dark" ? AnalyticsDark : AnalyticsLigth
  const imageSrcInsights = loadedTheme === "dark" ? InsightsDark : InsightsLight

  return (
    <LayoutSection>
      <div className={styles.StyledBenefitsSection}>
        <H2>Why choose financy ? </H2>
        <Paragraph>
          Financy gives you a perfect overview of your monthly incomes and
          expenses to help you get in control of your cashflow{" "}
        </Paragraph>
        <div className={styles.StyledBenefitTeaserWrapper}>
          <BenefitTeaser
            src={imageSrcReport}
            text="Comprehensive Financial Overview"
          />
          <BenefitTeaser
            src={imageSrcInsights}
            text="Monthly Cashflow Insights"
          />
          <BenefitTeaser
            src={imageSrcAnalytics}
            text="Automatic Analytics & Reporting"
          />
        </div>
        <div className={styles.StyledBigTeaserWrapper}>
          <BigBenefitTeaser
            headlineText="Safe & Secure"
            paragraphText="Emphasize data security and privacy protection"
            image={{
              src: CyberSecurityImage,
              alt: "cyber-security",
            }}
          />
          <BigBenefitTeaser
            image={{
              src: TrackingImage,
              alt: "tracking.png",
            }}
            headlineText="Easy cashflow tracking"
            paragraphText="Track your income and expenses with ease"
          />
        </div>
      </div>
    </LayoutSection>
  )
}

export const CTASection = () => {
  return (
    <LayoutSection>
      <CTATeaser
        headlineText="Take Control of Your Finances Today"
        paragraphText="Start Your Journey to Financial Freedom Today!
Join thousands who are taking control of their finances.
"
      />
    </LayoutSection>
  )
}

export const TestimonalSection = () => {
  return (
    <LayoutSection
      isFullWidth
      className={styles.StyledTestimonialLayoutSectionWrapper}
    >
      <div className={styles.StyledTestimonialContentWrapper}>
        <H3>Testimonials from our clients</H3>
        <Paragraph>
          Get an impressive overview , what our clients say about us
        </Paragraph>
        <LayoutSection>
          <div className={styles.StyledQuoteTeaserWrapper}>
            <QuoteTeaser
              starCount={5}
              testimonialText=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repellendus in numquam reiciendis illum veniam exercitationem doloremqueodit repellat aut magnam sapiente placeat soluta, praesentium alias! Earum ipsum natus distinctio!"
            />
            <QuoteTeaser
              starCount={5}
              testimonialText=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repellendus in numquam reiciendis illum veniam exercitationem doloremqueodit repellat aut magnam sapiente placeat soluta, praesentium alias! Earum ipsum natus distinctio!"
            />
            <QuoteTeaser
              starCount={5}
              testimonialText=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repellendus in numquam reiciendis illum veniam exercitationem doloremqueodit repellat aut magnam sapiente placeat soluta, praesentium alias! Earum ipsum natus distinctio!"
            />
          </div>
        </LayoutSection>
      </div>
    </LayoutSection>
  )
}

export const PricingTeasersSection = () => {
  return (
    <LayoutSection>
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
          price="Free"
          interval="/month"
        />
      </div>
    </LayoutSection>
  )
}
