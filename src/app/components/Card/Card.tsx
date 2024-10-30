"use client"

import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

import { MuiSkeleton } from "../MuiSkeleton/MuiSkeleton"
import styles from "./Card.styles.module.css"
import type { CardProps } from "./Card.types"
import { determineStyling } from "./useCard"

const Card: React.FC<CardProps> = ({
  title,
  amount,
  performance,
  isBalanceCard,
}) => {
  return (
    <div className={styles.StyledPaper}>
      <div className={styles.CardWrapper}>
        <span className={styles.StyledTitle}>{title}</span>
        <br />
        <div className={styles.StyledAmountAndPerformanceWrapper}>
          <p className={determineStyling(styles, isBalanceCard)}>
            {!amount ? (
              <MuiSkeleton height={50} width={115} variant="text" />
            ) : (
              `€ ${amount}`
            )}
          </p>
          <div className={styles.StyledPerformanceWrapper}>
            <div className={styles.StyledPerformance}>
              <FontAwesomeIcon icon={faArrowUp} />
              {performance}%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
