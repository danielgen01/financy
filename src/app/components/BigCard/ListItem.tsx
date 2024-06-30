import { DeleteForever } from "@mui/icons-material"
import EditIcon from "@mui/icons-material/Edit"
import { ListItemProps } from "./ListItem.types"
import { IconButton, Tooltip } from "@mui/material"
import styles from "./ListItem.styles.module.css"
import { useState } from "react"
import { Dialog } from "../Dialog/Dialog"
import { handleClose } from "./useBigCard"

export const ListItem: React.FC<ListItemProps> = ({
  name,
  cashflowAmount,
  onRemove,
  id,
  onEdit,
  isFourColumns,
}) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const dialogContentState = {
    name: name,
    cashflowAmount: cashflowAmount,
  }

  return (
    <div className={styles.StyledListItemWrapper}>
      <Tooltip
        title={name}
        className={styles.StyledNameWrapper}
        style={{ cursor: "default" }}
      >
        <span>{name}</span>
      </Tooltip>

      <div className={styles.StyledPriceWrapper}>
        <div
          className={
            isFourColumns
              ? styles.StyledCashflowAmountFourColumns
              : styles.StyledCashflowAmount
          }
        >
          €{cashflowAmount}
        </div>
      </div>

      <div className={styles.StyledActionButtonsWrapper}>
        <IconButton
          className={styles.StyledEditButtonWrapper}
          onClick={() => {
            setOpenDialog(true)
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          className={styles.StyledDeleteButton}
          onClick={() => onRemove && onRemove(id)}
        >
          <DeleteForever />
        </IconButton>
      </div>
      {openDialog && (
        <Dialog
          open={openDialog}
          dialogTitle="Edit item"
          onClose={() => handleClose(setOpenDialog)}
          dialogContent={dialogContentState}
          editCardItem={(updatedName: string, updatedCashflowAmount: number) =>
            onEdit && onEdit(id, updatedName, updatedCashflowAmount)
          }
        ></Dialog>
      )}
    </div>
  )
}
