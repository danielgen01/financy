import type { Meta, StoryFn } from "@storybook/react"
import { headlineItemsMockCard } from "@/headlineItems.mock"
import { listItemsMock } from "@/listItems.mock"
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
        incomeTotal={0}
        expenseTotal={0}
        {...args}
        netCashflowAmount={0}
      />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {
  cardTitle: "Testtitle",
  buttonActionName: "Add Income",
}
