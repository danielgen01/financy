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
        padding: "1rem",
        backgroundColor: "grey",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignInAndSignUpForm {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {}
