import type { ListItemProps } from "./ListItem.types"

interface HeadlineItem {
  headline: string
}

export type BigCardProps = {
  cardTitle?: string
  buttonActionName?: string
  headlineItems?: HeadlineItem[]
  isFourColumns?: boolean
  cardItems: ListItemProps[]
  setCardItems: React.Dispatch<React.SetStateAction<ListItemProps[]>>
  handleAddCardItem?: (name: string, cashflowAmount: number) => void
  handleRemoveCardItem?: (itemId: string) => void
  handleEditItem?: (
    itemId: string,
    updatedName: string,
    updatedCashflowAmount: number
  ) => void
}
