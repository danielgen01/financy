"use client"
import React from "react"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { CardProps } from "./Card.types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Card.styles.module.css"
import { Paper } from "@mui/material"

const Card: React.FC<CardProps> = ({ title, amount, performance }) => {
  return (
    <Paper sx={{ p: 2 }} elevation={1} className={styles.StyledPaper}>
      <div className={styles.CardWrapper}>
        <span style={{ color: "#516778" }}>{title}</span>
        <br />
        <div className={styles.StyledAmountAndPerformanceWrapper}>
          <p className={styles.StyledAmount}>${amount}</p>
          <div className={styles.StyledPerformanceWrapper}>
            <FontAwesomeIcon icon={faArrowUp} />
            {performance}%
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default Card
