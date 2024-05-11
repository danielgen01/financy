import { ListItemProps } from "./ListItem.types"

interface HeadlineItem {
  headline: string
}

export type BigCardProps = {
  listItems?: ListItemProps[]
  cardTitle?: string
  buttonActionName?: string
  color?: "green" | "red"
  headlineItems?: HeadlineItem[]
}
