"use client"

import { LayoutSection } from "@/app/components/LayoutSection/LayoutSection"
import { QuoteTeaser } from "@/app/components/QuoteTeaser/QuoteTeaser"
import { H3 } from "@/app/components/Typography/H3/H3"
import Paragraph from "@/app/components/Typography/Paragraph/Paragraph"

import styles from "./TestimonialSection.styles.module.css"

export const TestimonalSection = () => {
  return (
    <LayoutSection
      isFullWidth
      id="testimonials"
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
