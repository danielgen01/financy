import type { Meta, StoryFn } from "@storybook/react"

import DashboardPage from "./DashboardPage"

export default {
  title: "pages/DashboardPage",
  component: DashboardPage,
} as Meta

const Template: StoryFn = (args) => {
  return (
    <div
      style={{ backgroundColor: "#F2F6FD", padding: "1rem", height: "100vh" }}
    >
      <DashboardPage
        incomeData={[
          {
            cashflowAmount: 1000,
            name: "Salary",
          },
        ]}
        expenseData={[
          {
            cashflowAmount: 500,
            name: "Rent",
          },
        ]}
        assetData={[
          {
            cashflowAmount: 500,
            name: "Gold",
          },
        ]}
        liabilitiesData={[
          {
            cashflowAmount: 200,
            name: "Mortgage",
          },
        ]}
        {...args}
      />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {}
