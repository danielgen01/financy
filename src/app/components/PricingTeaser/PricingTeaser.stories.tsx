import type { Meta, StoryFn } from "@storybook/react"

import type { PricingTeaserProps } from "./PricingTeaser"
import { PricingTeaser } from "./PricingTeaser"

export default {
  title: "Components/PricingTeaser",
  component: PricingTeaser,
} as Meta

const Template: StoryFn<PricingTeaserProps> = (args) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100vh",
        width: "79vw",
        padding: "1rem",
      }}
    >
      <PricingTeaser {...args} />
    </div>
  )
}

export const FreeVariant = Template.bind({})
FreeVariant.args = {
  advantageItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
  interval: "/month",
  price: "Free",
  label: "Free",
  variant: "free",
}

export const BasicVariant = Template.bind({})
BasicVariant.args = {
  advantageItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
  interval: "/month",
  price: "€ 25",
  label: "Basic",
  variant: "basic",
}

export const Premium = Template.bind({})
Premium.args = {
  advantageItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
  interval: "/month",
  price: "€ 50",
  label: "Premium",
  variant: "premium",
}
