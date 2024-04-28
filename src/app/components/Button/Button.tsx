"use client"
import React from "react"
import { StyledButton } from "./Button.styles"

export const Button = () => {
  return (
    <StyledButton
      className="text-5xl text-red-500 bg-blue-500 px-10 py-10 "
      onClick={() => alert("hi")}
    >
      hi
    </StyledButton>
  )
}
