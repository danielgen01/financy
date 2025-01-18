import type { Meta, StoryFn } from "@storybook/react"

import { SignInAndSignUpForm } from "./SignInAndSignUpForm"

export default {
  title: "Components/SignInAndSignUpForm",
  component: SignInAndSignUpForm,
} as Meta

const Template: StoryFn<any> = (args) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "500px",
        margin: "1rem",
        padding: "1rem",
        backgroundColor: "grey",
      }}
    >
      <SignInAndSignUpForm {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {}
