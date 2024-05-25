import type { Meta, StoryFn } from "@storybook/react"
import HamburgerMenu from "./HamburgerMenu"

export default {
  title: "Components/HamburgerMenu",
  component: HamburgerMenu,
} as Meta

const Template: StoryFn<any> = (args) => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6fd",
        height: "100vh",
        width: "50vw",
        padding: "1rem",
      }}
    >
      <HamburgerMenu {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {}
