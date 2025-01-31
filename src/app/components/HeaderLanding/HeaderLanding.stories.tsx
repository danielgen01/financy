import type { Meta, StoryFn } from "@storybook/react"

import { Headerlanding } from "./HeaderLanding"

export default {
  title: "Components/Headerlanding",
  component: Headerlanding,
} as Meta

const Template: StoryFn = (args) => {
  return (
    <div>
      <Headerlanding {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {}
