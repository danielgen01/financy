import type { Meta, StoryFn } from "@storybook/react"

import { headlineItemsMockCard } from "@/headlineItems.mock"
import { listItemsMock } from "@/listItems.mock"

import { BigCard } from "./BigCard"
import type { BigCardProps } from "./BigCard.types"

export default {
  title: "Components/BigCard",
  component: BigCard,
} as Meta

const Template: StoryFn<BigCardProps> = (args) => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6fd",
        height: "100vh",
        width: "70vw",
        padding: "1rem",
      }}
    >
      <BigCard
        {...args}
        cardItems={listItemsMock.listItems}
        headlineItems={headlineItemsMockCard}
      />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {
  cardTitle: "Testtitle",
  buttonActionName: "Add Income",
}
