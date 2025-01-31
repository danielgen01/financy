import { Visibility, VisibilityOff } from "@mui/icons-material"
import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material"
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import Image from "next/image"
import { useState } from "react"

import { signInWithGooglePopup } from "@/app/utils/firebaseConfig"

import styles from "./SignInAndSignUpForm.styles.module.css"

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
    <FormControl className={styles.formControl}>
      <FormLabel required={required} className={styles.label}>
        {label}
      </FormLabel>
      <TextField
        {...textFieldProps}
        value={value}
        onChange={handleChange}
        variant="filled"
        type={isPassword && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        className={styles.input}
        InputProps={{
          ...(isPassword && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  className={styles.iconButton}
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

interface SigjnInAndSignUpProps {
  router?: AppRouterInstance | null
}

export const SignUpWithGoogleButton: React.FC<SigjnInAndSignUpProps> = ({
  router,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const signUpWithGoogle = async () => {
    setIsLoading(true)
    try {
      await signInWithGooglePopup()
      router?.push("/dashboard")
    } catch (error) {
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
