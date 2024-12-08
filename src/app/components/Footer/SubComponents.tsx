import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChevronRight } from "@mui/icons-material"
import Link from "next/link"

import styles from "./Footer.styles.module.css"

export const EmailNewsletterInput: React.FC = () => {
  return (
    <div className={styles.StyledInputBox}>
      <input
        className={styles.StyledInputField}
        placeholder="Enter your email"
        minLength={5}
        type="email"
      />
      <button type="button" className={styles.StyledInputButton}>
        <FontAwesomeIcon
          icon={faPaperPlane}
          size="2x"
          className={styles.StyledIconPaperPlane}
        />
      </button>
    </div>
  )
}

interface FooterLinkProps {
  label: string
  href: string
}

export const FooterLink: React.FC<FooterLinkProps> = ({ label, href }) => {
  return (
    <Link href={href} className={styles.StyledFooterChevronLink}>
      <ChevronRight />
      <span className={styles.StyledSpanChevronLink}>{label}</span>
    </Link>
  )
}
