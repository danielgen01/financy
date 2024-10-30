"use client"

// pages/auth.js
import { useState } from "react"

import { signUp } from "../utils/auth"

export default function AuthPage() {
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
    <section className="">
      <div className="">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>

      <div className="">
        <button onClick={handleSignUp} className="">
          Sign Up
        </button>
      </div>
      {error && <p>{error}</p>}
    </section>
  )
}
