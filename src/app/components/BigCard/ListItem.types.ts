export type ListItemProps = {
  name: string
  cashflowAmount: number
  id: string | null
  onRemove?: (id: any) => void | null
}
