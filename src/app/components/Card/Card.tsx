"use client"
import React from "react"
import { Paper } from "@mui/material"
import {
  CardWrapper,
  StyledAmount,
  StyledAmountAndPerformanceWrapper,
  StyledPaper,
} from "./Card.styles"
import { CardProps } from "./Card.types"

const Card: React.FC<CardProps> = ({ title, amount, performance }) => {
  return (
    <StyledPaper sx={{ p: 2 }} elevation={1}>
      <CardWrapper>
        <span style={{ color: "#516778" }}> {title}</span>
        <br />
        <StyledAmountAndPerformanceWrapper>
          <StyledAmount>${amount}</StyledAmount>
          <span style={{ color: "#516778" }}>{performance}%</span>
        </StyledAmountAndPerformanceWrapper>
      </CardWrapper>
    </StyledPaper>
  )
}

export default Card
