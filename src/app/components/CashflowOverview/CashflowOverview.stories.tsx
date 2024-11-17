import type { Meta, StoryFn } from "@storybook/react"

import CashflowOverview from "./CashflowOverview"

export default {
  title: "Components/CashflowOverview",
  component: CashflowOverview,
} as Meta

const Template: StoryFn = (args) => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6fd",
        height: "100vh",
        width: "90vw",
        padding: "1rem",
      }}
    >
      <CashflowOverview
        incomeTotal={1000}
        expenseTotal={200}
        {...args}
        netCashflowAmount={2500}
      />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {
  cardTitle: "Testtitle",
  buttonActionName: "Add Income",
}
