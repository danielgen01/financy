import Image from "next/image"
import React from "react"
import styles from "./CashflowOverview.module.css"

export interface CashflowOverviewProps {
  netCashflowAmount: number
}

const CashflowOverview: React.FC<CashflowOverviewProps> = ({
  netCashflowAmount,
}) => {
  return (
    <div className={styles.StyledCashflowOverviewWrapper}>
      <div className={styles.StyledCashflowContentWrapper}>
        <div className={styles.StyledImagePlusTextWrapper}>
          <Image
            src="/cashflow.png"
            alt="Cashflow Overview"
            width={75}
            height={75}
            className={styles.StyledCashflowImage}
          />
          <div className={styles.StyledCashflowTextWrapper}>
            <span className={styles.StyledCashflowText}>Monthly Cashflow</span>
            <span>(Total Income - Expenses)</span>
          </div>
        </div>
        <span className="text-primary-10% font-bold text-2xl">
          €{netCashflowAmount}
        </span>
      </div>
    </div>
  )
}

export default CashflowOverview
