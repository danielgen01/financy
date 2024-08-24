export type ListItemProps = {
  name: string;
  cashflowAmount: number;
  isFourColumns?: boolean;
  id: string;
  onRemove?: (id: any) => void | null;
  onEdit?: (
    itemId: string,
    updatedName: string,
    updatedCashflowAmount: number,
  ) => void | null;
};
