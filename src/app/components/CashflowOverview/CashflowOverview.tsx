import Image from "next/image"
import React from "react"
import styles from "./CashflowOverview.module.css"
import { roundToFixed } from "./SubComponents"

export interface CashflowOverviewProps {
  netCashflowAmount: number
  incomeTotal: number
  expenseTotal: number
}

const CashflowOverview: React.FC<CashflowOverviewProps> = ({
  netCashflowAmount,
  incomeTotal,
  expenseTotal,
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
          <div className={styles.StyledPaydayTextWrapper}>
            <span className={styles.StyledPaydayText}>Payday</span>
            <div className="calculationwrapper  items-center gap-2 hidden md:flex">
              <span className="text-green-500 font-semibold">
                ( {roundToFixed(incomeTotal)}€
              </span>
              <span className="text-center">- </span>
              <span className="text-red-500 font-semibold">
                {roundToFixed(expenseTotal)}€ )
              </span>
            </div>
          </div>
        </div>
        <div className={styles.StyledCashflowAmountWrapper}>
          <span className="text-primary-10% font-bold text-2xl">
            €{roundToFixed(netCashflowAmount)}
          </span>
          <span className="">of which passive* = €0</span>
        </div>
      </div>
    </div>
  )
}

export default CashflowOverview
