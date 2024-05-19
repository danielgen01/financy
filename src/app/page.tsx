import { getFirebaseData } from "../app/utils/firebaseConfig"
import React from "react"
import DashboardPage from "./components/pageTemplates/homepage/DashboardPage"
import { fetchDashboardPageProps } from "@/fetcher/Dashboard/fetchDashboardPage"

export default async function HomePageAKADashboardPage() {
  const dashboardPageProps = await fetchDashboardPageProps({
    getIncomeData: () => getFirebaseData("incomeItems"),
    getExpenseData: () => getFirebaseData("expensesItems"),
    getAssetData: () => getFirebaseData("assetsItems"),
    getLiabilitiesData: () => getFirebaseData("liabilitiesItems"),
  })

  return <DashboardPage {...dashboardPageProps} />
}
