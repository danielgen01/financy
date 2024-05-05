import type { Meta, StoryFn } from "@storybook/react"
import { BigCard } from "./BigCard"

export default {
  title: "Components/BigCard",
  component: BigCard,
} as Meta

const Template: StoryFn<any> = (args) => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6fd",
        height: "100vh",
        width: "70vw",
        padding: "1rem",
      }}
    >
      <BigCard {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {
  title: "Balance",
  amount: 0,
  performance: 20,
}
