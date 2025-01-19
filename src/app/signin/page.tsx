import React from "react"

import { LayoutSection } from "../components/LayoutSection/LayoutSection"
import { SignInAndSignUpForm } from "../components/SignInAndSignUpForm/SignInAndSignUpForm"
import styles from "./page.styles.module.css"

export default function AuthPage() {
  return (
    <LayoutSection className={styles.StyledAuthPage}>
      <SignInAndSignUpForm />
    </LayoutSection>
  )
}
