import Image from "next/image";
import React from "react";
import styles from "./CashflowOverview.module.css";
import { roundToFixed } from "./SubComponents";
import { Skeleton } from "@mui/material";
import { useTheme } from "next-themes";

export interface CashflowOverviewProps {
  netCashflowAmount: number;
  incomeTotal: number;
  expenseTotal: number;
}

const CashflowOverview: React.FC<CashflowOverviewProps> = ({
  netCashflowAmount,
  incomeTotal,
  expenseTotal,
}) => {
  const { theme } = useTheme();

  return (
    <div className={styles.StyledCashflowOverviewWrapper}>
      <div className={styles.StyledCashflowContentWrapper}>
        <div className={styles.StyledImagePlusTextWrapper}>
          <Image
            src={`${theme === "dark" ? "/Icon wrapper-dark.png" : "/Icon wrapper.png"}`}
            alt="Cashflow Overview"
            width={75}
            height={75}
            className={styles.StyledCashflowImage}
          />
          <div className={styles.StyledPaydayTextWrapper}>
            <span className={styles.StyledPaydayText}>Payday</span>
            <div className={styles.StyledCashflowCalculationWrapper}>
              <span className="">
                {!incomeTotal ? (
                  <Skeleton variant="text" width={80} height={45} />
                ) : (
                  roundToFixed(incomeTotal)
                )}
              </span>
              <span className="">- </span>
              <span className="">
                {!incomeTotal ? (
                  <Skeleton variant="text" width={80} height={45} />
                ) : (
                  roundToFixed(expenseTotal)
                )}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.StyledCashflowAmountWrapper}>
          <span className={styles.StyledCasfhlowAmount}>
            {!incomeTotal ? (
              <Skeleton variant="text" width={150} height={45} />
            ) : (
              `€ ${roundToFixed(netCashflowAmount)}`
            )}
          </span>
          <span className="">of which passive* = €0</span>
        </div>
      </div>
    </div>
  );
};

export default CashflowOverview;
