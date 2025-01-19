"use client"

import React from "react"

import { LayoutSection } from "../components/LayoutSection/LayoutSection"
import { SignInAndSignUpForm } from "../components/SignInAndSignUpForm/SignInAndSignUpForm"
import styles from "./page.styles.module.css"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const router = useRouter()
  return (
    <LayoutSection className={styles.StyledAuthPage}>
      <SignInAndSignUpForm router={router} />
    </LayoutSection>
  )
}
