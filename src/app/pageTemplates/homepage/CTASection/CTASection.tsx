import { CTATeaser } from "@/app/components/CTATeaser/CTATeaser"
import { LayoutSection } from "@/app/components/LayoutSection/LayoutSection"

export const CTASection = () => {
  return (
    <LayoutSection>
      <CTATeaser
        headlineText="Take Control of Your Finances Today"
        paragraphText="Start Your Journey to Financial Freedom Today!
  Join thousands who are taking control of their finances.
  "
      />
    </LayoutSection>
  )
}
