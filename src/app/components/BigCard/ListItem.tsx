import { DeleteForever } from "@mui/icons-material"
import EditIcon from "@mui/icons-material/Edit"
import { ListItemProps } from "./ListItem.types"
import { IconButton, Tooltip } from "@mui/material"
import styles from "./ListItem.styles.module.css"

export const ListItem: React.FC<ListItemProps> = ({
  name,
  cashflowAmount,
  onRemove,
  id,
  onEdit,
}) => {
  const handleEdit = () => {
    const updatedName = prompt("Neuer Name:", name)
    const updatedCashflowAmount = parseFloat(
      prompt("Neuer Cashflow Betrag:", cashflowAmount.toString()) ||
        cashflowAmount.toString()
    )

    if (updatedName && !isNaN(updatedCashflowAmount)) {
      onEdit?.(id, updatedName, updatedCashflowAmount)
    }
  }

  return (
    <div className={styles.StyledListItemWrapper}>
      <Tooltip title={name} className={styles.StyledNameWrapper}>
        <span>{name}</span>
      </Tooltip>

      <div className={styles.StyledPriceWrapper}>
        <div className={styles.StyledCashflowAmount}>€{cashflowAmount}</div>
      </div>

      <div className={styles.StyledActionButtonsWrapper}>
        <IconButton
          className={styles.StyledEditButtonWrapper}
          onClick={handleEdit}
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
    </div>
  )
}
