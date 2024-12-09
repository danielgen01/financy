import type { Meta, StoryFn } from "@storybook/react"

import { Footer } from "./Footer"

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta

const Template: StoryFn = (args) => {
  return <Footer {...args} />
}

export const Initial = Template.bind({})
