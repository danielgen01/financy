import type { Meta, StoryFn } from "@storybook/react"
import { Dialog } from "./Dialog"

export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    onClose: { action: "onClose" },
    addCardItem: { action: "addCardItem" },
  },
} as Meta

const Template: StoryFn = (args) => {
  return (
    <div className="h-screen w-screen bg-black opacity-80 flex justify-center items-center">
      <Dialog open {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {}
