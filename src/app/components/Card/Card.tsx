"use client";
import React from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { CardProps } from "./Card.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.styles.module.css";
import MuiSkeleton from "../MuiSkeleton/MuiSkeleton";

const Card: React.FC<CardProps> = ({
  title,
  amount,
  performance,
  isBalanceCard,
}) => {
  const determineStyling = () => {
    if (isBalanceCard) {
      return styles.StyledAmountPurpleColour;
    } else {
      return styles.StyledAmount;
    }
  };
  return (
    <div className={styles.StyledPaper}>
      <div className={styles.CardWrapper}>
        <span className={styles.StyledTitle}>{title}</span>
        <br />
        <div className={styles.StyledAmountAndPerformanceWrapper}>
          <p className={determineStyling()}>
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
  );
};

export default Card;
