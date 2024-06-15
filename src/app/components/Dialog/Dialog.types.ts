import { DialogProps } from "@mui/material"

export interface CustomDialogProps extends DialogProps {
  addCardItem?: (name: string, cashflowAmount: number) => void // Definiere die Typen für die Parameter
}

export interface DialogFormData {
  name: string
  amount: number // Aktualisierte Typdefinition für das Cashflow-Feld
}
