import type { ListItemProps } from "./ListItem.types"

export const determineTotal = (items: ListItemProps[]) => {
  let total = 0
  for (const key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      total += items[key].cashflowAmount
    }
  }
  return parseFloat(total.toFixed(2))
}

export const determineAddButtonStyling = (
  styles: Record<string, string>,
  buttonActionName?: string
) => {
  if (buttonActionName === "Add Income" || buttonActionName === "Add Asset") {
    return styles.StyledAddButton
  }
  return styles.StyledAddButonRed
}
