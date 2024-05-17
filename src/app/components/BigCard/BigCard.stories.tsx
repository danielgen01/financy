import type { Meta, StoryFn } from "@storybook/react"
import { BigCard } from "./BigCard"
import { BigCardProps } from "./BigCard.types"
import { headlineItemsMockCard } from "@/headlineItems.mock"
import { listItemsMock } from "@/listItems.mock"
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
        listItems={listItemsMock.listItems}
        color="red"
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
