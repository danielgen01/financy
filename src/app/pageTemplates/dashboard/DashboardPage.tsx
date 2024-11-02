import { Alert, AlertTitle } from "@mui/material"
import React from "react"

import Card from "@/app/components/Card/Card"
import CashflowOverview from "@/app/components/CashflowOverview/CashflowOverview"
import { BigCardContainer } from "@/app/containers/BigCardContainer"
import {
  headlineItemsMockBigCardAssets,
  headlineItemsMockBigCardLiabilities,
  headlineItemsMockCard,
} from "@/headlineItems.mock"

import styles from "./DashboardPage.styles.module.css"
import type { DashboardPageProps } from "./DashboardPage.types"
import {
  calculateTotal,
  calculateTotalExpense,
  calculateTotalIncome,
} from "./utilities"

const DashboardPage = ({ ...props }: DashboardPageProps) => {
  return (
    <>
      <section>
        <div className={styles.StyledCardWrapper}>
          <Card title="Balance" amount={94242} performance={20} isBalanceCard />
          <Card
            title="Incomes"
            amount={calculateTotalIncome(props.incomeData)}
            performance={20}
          />
          <Card
            title="Expenses"
            amount={calculateTotalExpense(props.expenseData)}
            performance={10}
          />
        </div>
      </section>
      <div className={styles.StyledHeadlineAndFilterWrapper}>
        <h1 className={styles.StyledHeadline}>Income Statement</h1>
        {/* <FilterMenu /> */}
      </div>
      <section className={styles.StyledBigCardsWrapperSection}>
        <BigCardContainer
          headlineItems={headlineItemsMockCard}
          buttonActionName="Add Income"
          cardTitle="Income"
          listItems={props.incomeData}
        />
        <BigCardContainer
          headlineItems={headlineItemsMockCard}
          buttonActionName="Add Expense"
          cardTitle="Expenses"
          listItems={props.expenseData}
        />
      </section>
      <section className={styles.StyledCashflowOverviewSection}>
        <CashflowOverview
          netCashflowAmount={calculateTotal({
            incomeData: props.incomeData,
            expenseData: props.expenseData,
          })}
          incomeTotal={calculateTotalIncome(props.incomeData)}
          expenseTotal={calculateTotalExpense(props.expenseData)}
        />
      </section>
      <Alert severity="info" className={styles.StyledInfoCard}>
        <AlertTitle>Info</AlertTitle>
        Passive means in this case income, which you don&apos;t work actively
        for. As an example this could be a rented-out property, a YouTube video
        which brings you passive money after recording it, a published book,
        etc..
      </Alert>
      <section className={styles.StyledBigCardsWrapperSection}>
        <BigCardContainer
          headlineItems={headlineItemsMockBigCardAssets}
          buttonActionName="Add Asset"
          cardTitle="Assets"
          listItems={props.assetData}
          isFourColumns={false} // We will check later on if we really need 4 columns TODO
        />
        <BigCardContainer
          headlineItems={headlineItemsMockBigCardLiabilities}
          buttonActionName="Add Liability"
          cardTitle="Liabilities"
          listItems={props.liabilitiesData}
          isFourColumns={false} // We will check later on if we really need 4 columns TODO
        />
      </section>
    </>
  )
}

export default DashboardPage
