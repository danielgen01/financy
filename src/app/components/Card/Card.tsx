"use client"
import React from "react"
import {
  CardWrapper,
  StyledAmount,
  StyledAmountAndPerformanceWrapper,
  StyledPaper,
  StyledPerformanceOverview,
} from "./Card.styles"
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { CardProps } from "./Card.types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card: React.FC<CardProps> = ({ title, amount, performance }) => {
  return (
    <StyledPaper sx={{ p: 2 }} elevation={1}>
      <CardWrapper>
        <span style={{ color: "#516778" }}> {title}</span>
        <br />
        <StyledAmountAndPerformanceWrapper>
          <StyledAmount>${amount}</StyledAmount>
          <div className="flex gap-2 items-center  border-[#D5DDE2] border-2  text-green-500 h-6 p-2 rounded-md">
            <FontAwesomeIcon icon={faArrowUp} />
            {performance}%
          </div>
        </StyledAmountAndPerformanceWrapper>
      </CardWrapper>
    </StyledPaper>
  )
}

export default Card
