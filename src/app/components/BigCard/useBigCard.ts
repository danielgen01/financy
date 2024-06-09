import { ListItemProps } from "./ListItem.types"

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

export const determineTotal = (items: ListItemProps[]) => {
  let total = 0
  for (const key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      total += items[key].cashflowAmount
    }
  }
  return parseFloat(total.toFixed(2))
}

export const handleClose = (
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setOpenDialog(false)
}

export const handleOpen = (
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setOpenDialog(true)
}
