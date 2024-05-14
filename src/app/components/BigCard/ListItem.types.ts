export type ListItemProps = {
  name: string
  cashflowAmount: number
  id: string // Ändern Sie den Typ von "id" auf "string"
  onRemove?: (id: any) => void | null
}
