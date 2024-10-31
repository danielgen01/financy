"use client"

// pages/auth.js
import { useState } from "react"

import { signIn } from "../utils/auth"

export default function AuthPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSignIn = async () => {
    const { user, error } = await signIn(email, password)
    if (error) {
      setError(true)
    } else {
      console.log("User signed in:", user)
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
        <button onClick={handleSignIn} className="">
          Sign In
        </button>
      </div>
      {error && <p>{error}</p>}
    </section>
  )
}
