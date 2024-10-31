export const determineStyling = (
  styles: Record<string, string>,
  isBalanceCard?: boolean
) => {
  if (isBalanceCard) {
    return styles.StyledAmountPurpleColour
  }
  return styles.StyledAmount
}
