import type { Meta, StoryFn } from "@storybook/react"

// import type { QuoteTeaserProps } from "./QuoteTeaser"
import { PricingTeaser } from "./PricingTeaser"

export default {
  title: "Components/PricingTeaser",
  component: PricingTeaser,
} as Meta

const Template: StoryFn<any> = (args) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100vh",
        width: "50vw",
        padding: "1rem",
      }}
    >
      <PricingTeaser {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {
  advantageItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
}
