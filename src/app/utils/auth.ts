// auth.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

import { auth } from "./firebaseConfig"

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    return { user: userCredential.user, error: null }
  } catch (error) {
    console.error("Error during sign up:", error)
    return { user: null, error }
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    return { user: userCredential.user, error: null }
  } catch (error) {
    return { user: null, error }
  }
}

export const logOut = async () => {
  try {
    await signOut(auth)
    return { error: null }
  } catch (error) {
    return { error }
  }
}
