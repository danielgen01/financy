import type { Meta, StoryFn } from "@storybook/react"

import type { QuoteTeaserProps } from "./QuoteTeaser"
import { QuoteTeaser } from "./QuoteTeaser"

export default {
  title: "Components/QuoteTeaser",
  component: QuoteTeaser,
} as Meta

const Template: StoryFn<QuoteTeaserProps> = (args) => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6fd",
        height: "100vh",
        width: "50vw",
        padding: "1rem",
      }}
    >
      <QuoteTeaser {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {
  starCount: 5,
  testimonialText:
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repellendus in numquam reiciendis illum veniam exercitationem doloremqueodit repellat aut magnam sapiente placeat soluta, praesentium alias! Earum ipsum natus distinctio!",
}
