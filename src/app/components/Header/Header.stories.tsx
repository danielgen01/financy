import type { Meta, StoryFn } from "@storybook/react"

import DefaultHeader from "./Header"

export default {
  title: "Components/Header",
  component: DefaultHeader,
} as Meta

const Template: StoryFn = (args) => {
  return (
    <div
      style={{ backgroundColor: "#F2F6FD", padding: "1rem", height: "100vh" }}
    >
      <DefaultHeader {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {}
