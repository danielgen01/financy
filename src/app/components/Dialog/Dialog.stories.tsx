import type { Meta, StoryFn } from "@storybook/react";
import { Dialog } from "./Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    onClose: { action: "onClose" },
    addCardItem: { action: "addCardItem" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <div>
      <Dialog open {...args} />
    </div>
  );
};

export const Initial = Template.bind({});
Initial.args = {};
