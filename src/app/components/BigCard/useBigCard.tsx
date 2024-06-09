export const determineItemsRef = (cardTitle: string | undefined) => {
  if (cardTitle === "Income") {
    return "incomeItems"
  } else if (cardTitle === "Expenses") {
    return "expensesItems"
  } else if (cardTitle === "Assets") {
    return "assetsItems"
  } else {
    return "liabilitiesItems"
  }
}
