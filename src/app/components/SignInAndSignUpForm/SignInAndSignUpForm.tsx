import { Visibility, VisibilityOff } from "@mui/icons-material"
import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material"
import Image from "next/image"
import React, { useState } from "react"

import { signUp } from "@/app/utils/auth"
import { signInWithGooglePopup } from "@/app/utils/firebaseConfig"

import styles from "./SignInAndSignUpForm.styles.module.css"

export const SignInAndSignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSignUp = async () => {
    const { user, error } = await signUp(email, password)
    if (error) {
      setError(true)
    } else {
      console.log("User signed up:", user)
    }
  }

  return (
    <div className={styles.StyledSignInAndSignUpForm}>
      <div className={styles.StyledSignInAndSignUpFormContent}>
        <p className={styles.StyledSignInText}>Sign In to your account</p>
        <SignUpWithGoogleButton />
        <form onSubmit={() => {}} className={styles.StyledForm}>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel>E-Mail</FormLabel>
            <TextField
              variant="outlined"
              type="email"
              placeholder="Enter your E-Mail adress"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel>Password</FormLabel>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              InputProps={{
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
              }}
            />
          </FormControl>
          <button
            className={styles.StyledLoginButton}
            type="submit"
            onClick={handleSignUp}
          >
            Login
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  )
}

const SignUpWithGoogleButton = () => {
  const signUpWithGoogle = async () => {
    await signInWithGooglePopup()
  }
  return (
    <button
      className={styles.StyledButtonWrapper}
      onClick={signUpWithGoogle}
      type="button"
    >
      <Image src="/google.png" width={30} height={30} alt="google-icon" />
      Sign in with Google
    </button>
  )
}
