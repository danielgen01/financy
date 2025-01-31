import type { Meta, StoryFn } from "@storybook/react"

import LightReport from "../../../../public/report_light.png"
import type { BenefitTeaserProps } from "./BenefitTeaser"
import { BenefitTeaser } from "./BenefitTeaser"

export default {
  title: "Components/BenefitTeaser",
  component: BenefitTeaser,
} as Meta

const Template: StoryFn<BenefitTeaserProps> = (args) => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6fd",
        height: "100vh",
        width: "20vw",
        padding: "1rem",
      }}
    >
      <BenefitTeaser {...args} />
    </div>
  )
}

export const Initial = Template.bind({})
Initial.args = {
  src: LightReport,
  text: "Status Report",
}
