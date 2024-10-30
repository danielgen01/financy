import type { Meta, StoryFn } from "@storybook/react"

import Header from "./Header"

export default {
  title: "Components/Header",
  component: Header,
} as Meta

const Template: StoryFn = (args) => {
  return (
    <div
      style={{ backgroundColor: "#F2F6FD", padding: "1rem", height: "100vh" }}
    >
      <Header {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {}
