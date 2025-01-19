"use client"

import { Visibility, VisibilityOff } from "@mui/icons-material"
import {
  FormControl,
  FormControlProps,
  FormLabel,
  TextField,
  TextFieldProps,
  IconButton,
  InputAdornment,
} from "@mui/material"
import Image from "next/image"
import React, { useState } from "react"

import { signIn, signUp } from "@/app/utils/auth"
import { signInWithGooglePopup } from "@/app/utils/firebaseConfig"

import Paragraph from "../Typography/Paragraph/Paragraph"
import styles from "./SignInAndSignUpForm.styles.module.css"

export const SignInAndSignUpForm = ({}) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  // const router = useRouter()

  const handleSignUp = async () => {
    const { user, error } = await signUp(email, password)
    if (error) {
      setError(true)
    } else {
      console.log("User signed up:", user)
      // router.push("/dashboard")
    }
  }

  const handleSignIn = async () => {
    const { user, error } = await signIn(email, password)
    if (error) {
      setError(true)
    } else {
      console.log("User signed in:", user)
    }
  }

  return (
    <div className={styles.StyledSignInAndSignUpForm}>
      <div className={styles.StyledSignInAndSignUpFormContent}>
        <p className={styles.StyledSignInText}>Sign In to your account</p>
        <SignUpWithGoogleButton />
        <form className={styles.StyledForm}>
          <CustomInput
            label="E-Mail"
            placeholder="Enter your E-Mail"
            required
            // onChange={(e) => setEmail(e.target.value)}
          />
          {isSignUpForm && (
            <CustomInput
              label="Confirm E-Mail"
              placeholder="Confirm your E-Mail"
              required
            />
          )}
          <CustomInput
            isPassword
            label="Password"
            placeholder="Enter your password"
            required
          />
          {isSignUpForm && (
            <CustomInput
              isPassword
              label="Confirm  password"
              placeholder="Confirm your passwort"
              required
            />
          )}
          <button
            className={styles.StyledLoginButton}
            type="submit"
            onClick={isSignUpForm ? handleSignUp : handleSignIn}
          >
            {isSignUpForm ? "Register" : "Login"}
          </button>
          {error && <p>{error}</p>}
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
  const signUpWithGoogle = async () => {
    setIsLoading(true)
    try {
      const result = await signInWithGooglePopup()
      console.log("Google sign in successful:", result)
      // Hier Navigation oder weitere Logik
    } catch (error) {
      console.error("Google sign in failed:", error)
      // Hier Error Handling
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

type CustomInputProps = {
  isPassword?: boolean
  placeholder?: string
  label?: string
  value?: string
  onChange?: (value: string) => void
} & Pick<FormControlProps, "required">

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  isPassword,
  required,
  value,
  onChange,
  ...textFieldProps
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

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
                  onClick={handleClickShowPassword}
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
