"use client";
// pages/auth.js
import { useState } from "react";
import { signUp, signIn } from "../utils/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSignUp = async () => {
    const { user, error } = await signUp(email, password);
    if (error) {
      setError(true);
    } else {
      console.log("User signed up:", user);
    }
  };

  const handleSignIn = async () => {
    const { user, error } = await signIn(email, password);
    if (error) {
      setError(true);
    } else {
      console.log("User signed in:", user);
    }
  };

  return (
    <div>
      <h1>Authentication</h1>
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
      <div className="flex gap-10 mt-10">
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
