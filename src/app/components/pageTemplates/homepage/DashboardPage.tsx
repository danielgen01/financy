"use client"
import {
  headlineItemsMockCard,
  headlineItemsMockBigCardAssets,
  headlineItemsMockBigCardLiabilities,
} from "@/headlineItems.mock"
import Card from "../../Card/Card"
import React from "react"
import { BigCard } from "../../BigCard/BigCard"
import { FilterMenu } from "../../FilterMenu/FilterMenu"
import CashflowOverview from "../../CashflowOverview/CashflowOverview"
import { DashboardPageProps } from "./DashboardPage.types"
import styles from "./DashboardPage.styles.module.css"
import {
  calculateTotal,
  calculateTotalExpense,
  calculateTotalIncome,
} from "./utilities"

const DashboardPage = ({
  incomeData,
  expenseData,
  assetData,
  liabilitiesData,
}: DashboardPageProps) => {
  return (
    <>
      <div className={styles.StyledDashboardPage}>
        <Card
          title="Balance"
          amount={94242}
          performance={20}
          isBalanceCard={true}
        />
        <Card
          title="Incomes"
          amount={calculateTotalIncome(incomeData)}
          performance={20}
        />
        <Card
          title="Expenses"
          amount={calculateTotalIncome(expenseData)}
          performance={10}
        />
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
        <CashflowOverview
          netCashflowAmount={calculateTotal({ incomeData, expenseData })}
          incomeTotal={calculateTotalIncome(incomeData)}
          expenseTotal={calculateTotalExpense(expenseData)}
        />
      </section>
      <p>
        * Passive means in this case income, which you dont&apos; work actively
        for. As an example this could be a rented out property, a youtube video
        which brings you passive money after recording it, a published book
        etc...{" "}
      </p>

      <section className={styles.StyledBigCardsWrapperSection}>
        <BigCard
          headlineItems={headlineItemsMockBigCardAssets}
          color="red"
          buttonActionName="Add asset"
          cardTitle="Assets"
          listItems={assetData}
          isFourColumns={true}
        />
        <BigCard
          headlineItems={headlineItemsMockBigCardLiabilities}
          color="red"
          buttonActionName="Add Liability"
          cardTitle="Liabilities"
          listItems={liabilitiesData}
          isFourColumns={true}
        />
      </section>
    </>
  )
}

export default DashboardPage
