"use client"

import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import React, { useState } from "react"

import { signIn, signUp } from "@/app/utils/auth"

import Paragraph from "../Typography/Paragraph/Paragraph"
import styles from "./SignInAndSignUpForm.styles.module.css"
import { CustomInput, SignUpWithGoogleButton } from "./SubComponents"

interface SignInAndSignUpFormProps {
  router?: AppRouterInstance | null
}

export const SignInAndSignUpForm: React.FC<SignInAndSignUpFormProps> = ({
  router,
}) => {
  const [loginRegisterEmail, setLoginRegisterEmail] = useState<string>("")
  const [confirmEmail, setConfirmEmail] = useState<string>()
  const [loginRegisterPassword, setLoginRegisterPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const [error, setError] = useState<string>()
  const [isSignUpForm, setIsSignUpForm] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSignUpForm) {
      if (loginRegisterEmail !== confirmEmail) {
        setError("Emails do not match")
        return
      }
      if (loginRegisterPassword !== confirmPassword) {
        setError("Passwords do not match")
        return
      }
      await handleSignUp()
    } else {
      await handleSignIn()
    }
  }

  const handleSignUp = async () => {
    const { error } = await signUp(loginRegisterEmail, loginRegisterPassword)
    if (error) {
      setError("Error during sign up")
    } else {
      router?.push("/dashboard")
    }
  }

  const handleSignIn = async () => {
    const { error } = await signIn(loginRegisterEmail, loginRegisterPassword)
    if (error) {
      setError("Invalid credentials")
    } else {
      router?.push("/dashboard")
    }
  }

  return (
    <div className={styles.StyledSignInAndSignUpForm}>
      <div className={styles.StyledSignInAndSignUpFormContent}>
        <p className={styles.StyledSignInText}>
          {isSignUpForm ? "Create an account" : "Sign In to your account"}
        </p>
        <SignUpWithGoogleButton router={router} />
        <form onSubmit={handleSubmit} className={styles.StyledForm}>
          <CustomInput
            label="E-Mail"
            placeholder="Enter your E-Mail"
            required
            value={loginRegisterEmail}
            onChange={(value: string) => setLoginRegisterEmail(value)}
          />
          {isSignUpForm && (
            <CustomInput
              label="Confirm E-Mail"
              placeholder="Confirm your E-Mail"
              required
              value={confirmEmail}
              onChange={(value: string) => setConfirmEmail(value)}
            />
          )}
          <CustomInput
            isPassword
            label="Password"
            placeholder="Enter your password"
            required
            value={loginRegisterPassword}
            onChange={(value: string) => setLoginRegisterPassword(value)}
          />
          {isSignUpForm && (
            <CustomInput
              isPassword
              label="Confirm password"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(value: string) => setConfirmPassword(value)}
            />
          )}
          <button className={styles.StyledLoginButton} type="submit">
            {isSignUpForm ? "Register" : "Login"}
          </button>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
        <div className={styles.StyledSignUpQuestionAndButtonWrapper}>
          <Paragraph>
            {!isSignUpForm ? "No account yet ?" : "I have an account"}
          </Paragraph>

          <button
            type="button"
            className={styles.StyledSignUpButton}
            onClick={() => setIsSignUpForm(!isSignUpForm)}
          >
            {!isSignUpForm ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  )
}
