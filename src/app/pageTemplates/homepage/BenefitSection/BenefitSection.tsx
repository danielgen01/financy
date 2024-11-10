"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { BenefitTeaser } from "@/app/components/BenefitTeaser/BenefitTeaser"
import { BigBenefitTeaser } from "@/app/components/BigBenefitTeaser/BigBenefitTeaser"
import { LayoutSection } from "@/app/components/LayoutSection/LayoutSection"
import { H2 } from "@/app/components/Typography/H2/H2"
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph"

import AnalyticsDark from "../../../../../public/analytics_dark.png"
import AnalyticsLigth from "../../../../../public/analytics_light.png"
import CyberSecurityImage from "../../../../../public/cyber_secrurity.png"
import InsightsDark from "../../../../../public/insights_dark.png"
import InsightsLight from "../../../../../public/insights_light.png"
import DarkReport from "../../../../../public/report_dark.png"
import LightReport from "../../../../../public/report_light.png"
import TrackingImage from "../../../../../public/tracking.png"
import styles from "./BenefitSection.styles.module.css"

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
      <div className={styles.StyledContentWrapper}>
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
