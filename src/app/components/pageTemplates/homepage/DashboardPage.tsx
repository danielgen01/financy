"use client"
import { headlineItemsMockCard } from "@/headlineItems.mock"
import Card from "../../Card/Card"
import React from "react"
import { BigCard } from "../../BigCard/BigCard"
import { FilterMenu } from "../../FilterMenu/FilterMenu"
import CashflowOverview from "../../CashflowOverview/CashflowOverview"
import { DashboardPageProps } from "./DashboardPage.types"
import styles from "./DashboardPage.styles.module.css"

const DashboardPage = ({
  incomeData,
  expenseData,
  assetData,
  liabilitiesData,
}: DashboardPageProps) => {
  const calculateTotal = () => {
    let total = 0
    for (const key in incomeData) {
      if (Object.prototype.hasOwnProperty.call(incomeData, key)) {
        total += incomeData[key].cashflowAmount
      }
    }
    for (const key in expenseData) {
      if (Object.prototype.hasOwnProperty.call(expenseData, key)) {
        total -= expenseData[key].cashflowAmount
      }
    }
    return total
  }
  return (
    <>
      <div className={styles.StyledDashboardPage}>
        <Card
          title="Balance"
          amount={94242}
          performance={20}
          isBalanceCard={true}
        />
        <Card title="Incomes" amount={9500} performance={20} />
        <Card title="Expenses" amount={2500} performance={10} />
      </div>
      <div className={styles.StyledHeadlineAndFilterWrapper}>
        <h1 className={styles.StyledHeadline}>Income Statement</h1>
        <FilterMenu />
      </div>
      <section className={styles.StyledBigCardsWrapperSection}>
        <BigCard
          headlineItems={headlineItemsMockCard}
          color="red"
          buttonActionName="Add Income"
          cardTitle="Income"
          listItems={incomeData}
        />
        <BigCard
          headlineItems={headlineItemsMockCard}
          color="red"
          buttonActionName="Add Expense"
          cardTitle="Expenses"
          listItems={expenseData}
        />
      </section>

      <section className="StyledCashflowOverviewSection mt-10">
        <CashflowOverview netCashflowAmount={calculateTotal()} />
      </section>

      <section className={styles.StyledBigCardsWrapperSection}>
        <BigCard
          headlineItems={headlineItemsMockCard}
          color="red"
          buttonActionName="Add asset"
          cardTitle="Assets"
          listItems={assetData}
        />
        <BigCard
          headlineItems={headlineItemsMockCard}
          color="red"
          buttonActionName="Add Liability"
          cardTitle="Liabilities"
          listItems={liabilitiesData}
        />
      </section>
    </>
  )
}

export default DashboardPage
