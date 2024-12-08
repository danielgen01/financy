import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Footer.styles.module.css"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link"
import { ChevronRight } from "@mui/icons-material"

export const EmailNewsletterInput: React.FC = () => {
  return (
    <div className={styles.StyledInputBox}>
      <input
        className={styles.StyledInputField}
        placeholder="Enter your email"
        minLength={5}
        type="email"
      />
      <button
        type="button"
        className={styles.StyledInputButton}
        onClick={() => alert("Submitted")}
      >
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
