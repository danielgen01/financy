import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React from "react"

import LogoDark from "../../../../public/Logo-dark.png"
import styles from "./Footer.styles.module.css"

export const Footer = () => {
  return (
    <div className={styles.StyledFooter}>
      <div className={styles.StyledFooterContent}>
        <div className={styles.StyledFooterHead}>
          <Image src={LogoDark} alt="Logo" />
          <span className={styles.StyledFooterHeadline}>
            Subscribe to Newsletter
          </span>
          <EmailNewsletterInput />
        </div>
        <hr className={styles.StyledLine} />
      </div>
    </div>
  )
}

const EmailNewsletterInput = () => {
  return (
    <div className={styles.StyledInputBox}>
      <input
        className={styles.StyledInputField}
        placeholder="Enter your E-Mail Adress"
        minLength={5}
        type="email"
      />
      <button type="button" className={styles.StyledInputButton}>
        <FontAwesomeIcon icon={faPaperPlane} size="2x" />
      </button>
    </div>
  )
}
