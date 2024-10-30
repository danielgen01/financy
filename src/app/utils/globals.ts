export const determineItemsRef = (cardTitle: string | undefined) => {
  if (cardTitle === "Income") {
    return "incomeItems"
  }
  if (cardTitle === "Expenses") {
    return "expensesItems"
  }
  if (cardTitle === "Assets") {
    return "assetsItems"
  }
  return "liabilitiesItems"
}
