import type { DialogProps } from "@mui/material"

export interface CustomDialogProps extends DialogProps {
  addCardItem?: (name: string, cashflowAmount: number) => void // Definiere die Typen für die Parameter
  editCardItem?: (name: string, cashflowAmount: number) => void // Definiere die Typen für die Parameter
  dialogTitle: string
  dialogContent?: any
  buttonActionName: string
}

export interface DialogFormData {
  name: string
  amount: number // Aktualisierte Typdefinition für das Cashflow-Feld
}
