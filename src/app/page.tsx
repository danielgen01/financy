"use client"
import { listItemsMock } from "@/listItems.mock"
import { BigCard } from "./components/BigCard/BigCard"
import Card from "./components/Card/Card"
import { FilterMenu } from "./components/FilterMenu/FilterMenu"
import { headlineItemsMockCard } from "@/headlineItems.mock"

export default function HomePageAKADashboardPage() {
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mt-10 px-16">
        <Card title="Balance" amount={94242} performance={20} />
        <Card title="Incomes" amount={9500} performance={20} />
        <Card title="Expenses" amount={2500} performance={10} />
      </div>
      <div className="flex w-full justify-between StyledHeadlineAndFilterWrapper px-16 mt-10 ">
        <h1 className="text-4xl font-semibold">Income Statement</h1>
        <FilterMenu />
      </div>
      <section className="big-cards-wrapper-section grid grid-cols-2 px-14 gap-10 mt-10 ">
        <BigCard
          headlineItems={headlineItemsMockCard}
          color="red"
          buttonActionName="Add Income"
          cardTitle="Income"
          listItems={listItemsMock.listItems}
        />
        <BigCard
          headlineItems={headlineItemsMockCard}
          color="red"
          buttonActionName="Add Expense"
          cardTitle="Expenses"
          listItems={listItemsMock.listItems}
        />
        <BigCard
          headlineItems={headlineItemsMockCard}
          color="red"
          buttonActionName="Add asset"
          cardTitle="Assets"
          listItems={listItemsMock.listItems}
        />
        <BigCard
          headlineItems={headlineItemsMockCard}
          color="red"
          buttonActionName="Add Liability"
          cardTitle="Liabilities"
          listItems={listItemsMock.listItems}
        />
      </section>
    </>
  )
}
