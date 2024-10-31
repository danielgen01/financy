import type { Meta, StoryFn } from "@storybook/react"

import Card from "./Card"
import type { CardProps } from "./Card.types"

export default {
  title: "Components/Card",
  component: Card,
} as Meta

const Template: StoryFn<CardProps> = (args) => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6fd",
        height: "100vh",
        width: "50vw",
        padding: "1rem",
      }}
    >
      <Card {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {
  title: "Balance",
  amount: 0,
  performance: 20,
}
