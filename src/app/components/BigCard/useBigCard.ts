import { ListItemProps } from "./ListItem.types";

export const determineTotal = (items: ListItemProps[]) => {
  let total = 0;
  for (const key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      total += items[key].cashflowAmount;
    }
  }
  return parseFloat(total.toFixed(2));
};
