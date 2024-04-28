import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import Border from "./Border"

const meta = {
  title: "Example/Border",
  component: Border,
} satisfies Meta<typeof Border>

export default meta

const Template: StoryFn = (args) => (
  <div className="bg-slate-500">
    <Border {...args} />
  </div>
)
export const Primary = Template.bind({})

Primary.args = {}
