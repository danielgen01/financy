"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

import { BenefitTeaser } from "@/app/components/BenefitTeaser/BenefitTeaser"
import { BigBenefitTeaser } from "@/app/components/BigBenefitTeaser/BigBenefitTeaser"
import { CustomButton } from "@/app/components/Button/Button"
import { H1 } from "@/app/components/Typography/H1/H1"
import { H2 } from "@/app/components/Typography/H2/H2"
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

const ArrowSvg = () => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      className="bi bi-arrow-right-short"
      stroke="white"
    >
      <path
        fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
      />
    </svg>
  )
}

export const HeroSection: React.FC = () => {
  const router = useRouter()

  return (
    <section className={styles.StyledHeroSection}>
      <H1>
        Manage your{" "}
        <span className={styles.StyledHighlightedSpan}>Finances </span>
        with ease
      </H1>
      <Paragraph>
        Our powerful platform helps you take control of your income, expenses{" "}
        assets, and liabilities, all in one place
      </Paragraph>
      <CustomButton
        onClick={() => {
          router.push("/signup")
        }}
      >
        Sign up now <ArrowSvg />
      </CustomButton>
    </section>
  )
}

export const PreviewSection: React.FC = () => {
  const { theme } = useTheme()
  const imageSrc = theme === "dark" ? PreviewDark : PreviewLight

  return (
    <section className={styles.StyledPreviewSection}>
      <div className={styles.StyledImagePreviewWrapper}>
        <Image
          src={imageSrc}
          alt="Preview_of_financy"
          width={500}
          height={500}
          placeholder="blur"
        />
      </div>
    </section>
  )
}

export const BenefitSection = () => {
  const { theme } = useTheme()
  const imageSrcReport = theme === "dark" ? DarkReport : LightReport
  const imageSrcAnalytics = theme === "dark" ? AnalyticsDark : AnalyticsLigth
  const imageSrcInsights = theme === "dark" ? InsightsDark : InsightsLight

  return (
    <section className={styles.StyledBenefitsSection}>
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
            width: 200,
            height: 200,
          }}
        />
        <BigBenefitTeaser
          image={{
            src: TrackingImage,
            alt: "tracking.png",
            width: 200,
            height: 200,
          }}
          headlineText="Easy cashflow tracking"
          paragraphText="Track your income and expenses with ease"
        />
      </div>
    </section>
  )
}
