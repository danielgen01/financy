import { DeleteForever } from "@mui/icons-material"
import {
  StyledEditButtonWrapper,
  StyledDeleteButton,
  StyledListItemWrapper,
  StyledNameWrapper,
  StyledPriceWrapper,
  StyledCashflowAmount,
  StyledActionButtonsWrapper,
} from "./ListItem.styles"
import EditIcon from "@mui/icons-material/Edit"
import { ListItemProps } from "./ListItem.types"

export const ListItem: React.FC<ListItemProps> = ({
  name,
  cashflowAmount,
  onRemove,
  id,
}) => {
  return (
    <StyledListItemWrapper>
      <StyledNameWrapper>
        <span>{name}</span>
      </StyledNameWrapper>

      <StyledPriceWrapper>
        <StyledCashflowAmount>€{cashflowAmount}</StyledCashflowAmount>
      </StyledPriceWrapper>

      <StyledActionButtonsWrapper>
        <StyledEditButtonWrapper onClick={() => console.log("Edit")}>
          <EditIcon />
        </StyledEditButtonWrapper>
        <StyledDeleteButton onClick={() => onRemove && onRemove(id)}>
          <DeleteForever />
        </StyledDeleteButton>
      </StyledActionButtonsWrapper>
    </StyledListItemWrapper>
  )
}
