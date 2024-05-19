"use client"
import { headlineItemsMockCard } from "@/headlineItems.mock"
import Card from "../../Card/Card"
import React from "react"
import { BigCard } from "../../BigCard/BigCard"
import { FilterMenu } from "../../FilterMenu/FilterMenu"
import CashflowOverview from "../../CashflowOverview/CashflowOverview"
import { DashboardPageProps } from "./DashboardPage.types"

const DashboardPage = ({
  incomeData,
  expenseData,
  assetData,
  liabilitiesData,
}: DashboardPageProps) => {
  console.log(
    "dashboardpage",
    incomeData,
    expenseData,
    assetData,
    liabilitiesData
  )
  return (
    <>
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 xl:grid-cols-3 ">
        <Card title="Balance" amount={94242} performance={20} />
        <Card title="Incomes" amount={9500} performance={20} />
        <Card title="Expenses" amount={2500} performance={10} />
      </div>
      <div className="flex w-full justify-between StyledHeadlineAndFilterWrapper mt-10 ">
        <h1 className="text-4xl font-semibold">Income Statement</h1>
        <FilterMenu />
      </div>
      <section className="big-cards-wrapper-section grid grid-cols-1 gap-10 mt-10 xl:grid-cols-2">
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
        <CashflowOverview netCashflowAmount={2} />
      </section>

      <section className="big-cards-wrapper-section grid grid-cols-1 gap-10 mt-10 xl:grid-cols-2">
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
