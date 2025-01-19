"use client"

import { Visibility, VisibilityOff } from "@mui/icons-material"
import {
  FormControl,
  FormControlProps,
  FormLabel,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material"
import Image from "next/image"
import React, { use, useState } from "react"

import { signIn, signUp } from "@/app/utils/auth"
import { signInWithGooglePopup } from "@/app/utils/firebaseConfig"

import Paragraph from "../Typography/Paragraph/Paragraph"
import styles from "./SignInAndSignUpForm.styles.module.css"
import { useRouter } from "next/navigation"
import Error from "next/error"

export const SignInAndSignUpForm = () => {
  const [loginRegisterEmail, setLoginRegisterEmail] = useState<string>()
  const [confirmEmail, setConfirmEmail] = useState<string>()
  const [loginRegisterPassword, setLoginRegisterPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const [error, setError] = useState<string>()
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSignUpForm) {
      // Validierung für Sign Up
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
    const { user, error } = await signUp(
      loginRegisterEmail,
      loginRegisterPassword,
    )
    if (error) {
      setError(true)
    } else {
      console.log("User signed up:", user)
      router.push("/dashboard")
    }
  }

  const handleSignIn = async () => {
    const { user, error } = await signIn(
      loginRegisterEmail,
      loginRegisterPassword,
    )
    if (error) {
      setError(true)
    } else {
      console.log("User signed in:", user)
      router.push("/dashboard")
    }
  }

  return (
    <div className={styles.StyledSignInAndSignUpForm}>
      <div className={styles.StyledSignInAndSignUpFormContent}>
        <p className={styles.StyledSignInText}>
          {isSignUpForm ? "Create an account" : "Sign In to your account"}
        </p>
        <SignUpWithGoogleButton />
        <form onSubmit={handleSubmit} className={styles.StyledForm}>
          <CustomInput
            label="E-Mail"
            placeholder="Enter your E-Mail"
            required
            value={loginRegisterEmail}
            onChange={(value) => setLoginRegisterEmail(value)}
          />
          {isSignUpForm && (
            <CustomInput
              label="Confirm E-Mail"
              placeholder="Confirm your E-Mail"
              required
              value={confirmEmail}
              onChange={(value) => setConfirmEmail(value)}
            />
          )}
          <CustomInput
            isPassword
            label="Password"
            placeholder="Enter your password"
            required
            value={loginRegisterPassword}
            onChange={(value) => setLoginRegisterPassword(value)}
          />
          {isSignUpForm && (
            <CustomInput
              isPassword
              label="Confirm password"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(value) => setConfirmPassword(value)}
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

const SignUpWithGoogleButton = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const signUpWithGoogle = async () => {
    setIsLoading(true)
    try {
      const result = await signInWithGooglePopup()
      console.log("Google sign in successful:", result)
      router.push("/dashboard")
    } catch (error) {
      console.error("Google sign in failed:", error)
      throw new Error("Google sign in failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      className={styles.StyledGoogleButtonWrapper}
      onClick={signUpWithGoogle}
      type="button"
    >
      {!isLoading && (
        <div>
          <Image src="/google.png" width={30} height={30} alt="google-icon" />
        </div>
      )}
      {isLoading ? "Signing in..." : "Sign in with Google"}
    </button>
  )
}

// CustomInput Komponente anpassen:
export const CustomInput: React.FC<any> = ({
  label,
  placeholder,
  isPassword,
  required,
  value,
  onChange,
  ...textFieldProps
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <FormControl sx={{ width: "100%" }}>
      <FormLabel required={required}>{label}</FormLabel>
      <TextField
        {...textFieldProps}
        value={value}
        onChange={handleChange}
        variant="filled"
        type={isPassword ? (showPassword ? "text" : "password") : "text"}
        placeholder={placeholder}
        InputProps={{
          ...(isPassword && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }),
        }}
      />
    </FormControl>
  )
}
