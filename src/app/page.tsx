"use client"
import { BigCard } from "./components/BigCard/BigCard"
import Card from "./components/Card/Card"
import { FilterMenu } from "./components/FilterMenu/FilterMenu"
import Header from "./components/Header/Header"

export default function Home() {
  return (
    <>
      <Header />
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
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
      </section>
    </>
  )
}
