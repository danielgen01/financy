import { headlineItemsMockCard } from "@/headlineItems.mock"
import Card from "../components/Card/Card"
import React, { useEffect, useState } from "react"
import { BigCard } from "../components/BigCard/BigCard"
import { FilterMenu } from "../components/FilterMenu/FilterMenu"
import { getFirebaseData } from "../utils/firebaseConfig"

const Homepage: React.FC = () => {
  const [incomeData, setIncomeData] = useState([])
  const [expenseData, setExpenseData] = useState([])
  const [assetData, setAssetData] = useState([])
  const [liabilityData, setLiabilityData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const incomeData = await getFirebaseData("incomeItems")
      const expenseData = await getFirebaseData("expensesItems")
      const assetData = await getFirebaseData("assets")
      const liabilityData = await getFirebaseData("liabilities")

      setIncomeData(incomeData)
      setExpenseData(expenseData)
      setAssetData(assetData)
      setLiabilityData(liabilityData)
    }

    fetchData()
  }, [])
  return (
    <>
      <div className="grid grid-cols-1 gap-10 mt-10 px-4 xl:px-16 md:grid-cols-2 xl:grid-cols-3 ">
        <Card title="Balance" amount={94242} performance={20} />
        <Card title="Incomes" amount={9500} performance={20} />
        <Card title="Expenses" amount={2500} performance={10} />
      </div>
      <div className="flex w-full justify-between StyledHeadlineAndFilterWrapper px-4 xl:px-16 mt-10 ">
        <h1 className="text-4xl font-semibold">Income Statement</h1>
        <FilterMenu />
      </div>
      <section className="big-cards-wrapper-section grid grid-cols-1 px-4 xl:px-16 gap-10 mt-10 xl:grid-cols-2">
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
          listItems={liabilityData}
        />
      </section>
    </>
  )
}

export default Homepage
