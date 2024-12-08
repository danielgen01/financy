"use client"
import { FacebookOutlined, Instagram, LinkedIn } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import LogoDark from "../../../../public/Logo-dark.png"
import Paragraph from "../Typography/Paragraph/Paragraph"
import styles from "./Footer.styles.module.css"
import { EmailNewsletterInput, FooterLink } from "./SubComponents"

export const Footer = () => {
  return (
    <div className={styles.StyledFooter}>
      <div className={styles.StyledFooterContent}>
        <div className={styles.StyledFooterHead}>
          <Image src={LogoDark} alt="Logo" className={styles.StyledImage} />
          <div className={styles.StyledActionAndNewsletterWrapper}>
            <span className={styles.StyledFooterHeadline}>
              Subscribe to Newsletter
            </span>
            <EmailNewsletterInput />
          </div>
        </div>
        <hr className={styles.StyledLine} />
        <div className={styles.StyledFooterBody}>
          <div className={styles.StyledParagraphAndSocialMediaIconsWrapper}>
            <Paragraph className={styles.StyledParagraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Paragraph>
            <div className={styles.StyledSocialMediaWrapper}>
              <span className={styles.StyledFollowUsText}>Follow Us:</span>
              <div className={styles.StyledIconWrapper}>
                <Link href="/" className={styles.StyledLink}>
                  <FacebookOutlined className={styles.StyledIcon} />
                </Link>
                <Link href="/" className={styles.StyledLink}>
                  <Instagram className={styles.StyledIcon} />
                </Link>
                <Link href="/" className={styles.StyledLink}>
                  <LinkedIn className={styles.StyledIcon} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.StyledSupportContentWrapper}>
            <span className={styles.StyledFooterHeadline}>Support</span>
            <FooterLink label="Help" href="/" />
            <FooterLink label="Contact us" href="/" />
            <FooterLink label="Return, Refund & Exchange policy" href="/" />
          </div>
        </div>
        <span className={styles.StyledFooterBottomText}>
          © 2024 All rights reserved
        </span>
      </div>
    </div>
  )
}
// Über uns, Kontakt, Impressum, Datenschutz und AGB.
