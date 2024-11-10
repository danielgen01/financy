"use client"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { CTATeaser } from "@/app/components/CTATeaser/CTATeaser"
import { LayoutSection } from "@/app/components/LayoutSection/LayoutSection"
import { QuoteTeaser } from "@/app/components/QuoteTeaser/QuoteTeaser"
import { H1 } from "@/app/components/Typography/H1/H1"
import { H3 } from "@/app/components/Typography/H3/H3"
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph"

import PreviewLight from "../../../../public/Financy-preview.png"
import PreviewDark from "../../../../public/FinancyDark-preview.png"
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
