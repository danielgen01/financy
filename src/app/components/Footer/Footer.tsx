"use client"

import {
  ChevronRight,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Security,
  Work,
} from "@mui/icons-material"
import Groups3Icon from "@mui/icons-material/Groups3"
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
            <FooterLink icon={<ChevronRight />} label="Help" href="/" />
            <FooterLink icon={<ChevronRight />} label="Contact us" href="/" />
            <FooterLink
              icon={<ChevronRight />}
              label="Return, Refund & Exchange policy"
              href="/"
            />
          </div>
          <div className={styles.StyledGetToKnowUsContent}>
            <span className={styles.StyledFooterHeadline}>Get to know us</span>
            <FooterLink icon={<Groups3Icon />} label="Our team" href="/" />
            <FooterLink
              icon={<LocationOn />}
              label="Munich, Germany"
              href="/"
            />
            <FooterLink icon={<Phone />} label="Call us" href="/" />
            <FooterLink icon={<Work />} label="Jobs" href="/" />
            <FooterLink
              icon={<Security />}
              label="Privacy & terms of conditions"
              href="/"
            />
          </div>
        </div>
        <span className={styles.StyledFooterBottomText}>
          © 2024 All rights reserved
        </span>
      </div>
    </div>
  )
}
