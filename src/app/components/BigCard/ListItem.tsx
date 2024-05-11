import { DeleteForever } from "@mui/icons-material"
import { StyledEditButtonWrapper, StyledDeleteButton } from "./ListItem.styles"
import EditIcon from "@mui/icons-material/Edit"
import { ListItemProps } from "./ListItem.types"

export const ListItem: React.FC<ListItemProps> = ({ name, cashflowAmount }) => {
  return (
    <div className="Styled-ListItem-wrapper flex  justify-between px-2 py-1 w-full">
      <div className="Styled-Name-Wrapper flex justify-start  w-full">
        <span className="name">{name}</span>
      </div>

      <div className="Styled-Price-Wrapper flex justify-center   w-full ">
        <span className="cash-flow flex justify-center ">
          ${cashflowAmount}
        </span>
      </div>

      <div className="Styled-Actions-Wrapper flex justify-end  w-full">
        <div className="actions flex gap-2">
          <StyledEditButtonWrapper onClick={() => console.log("Edit")}>
            <EditIcon />
          </StyledEditButtonWrapper>
          <StyledDeleteButton onClick={() => console.log("delete")}>
            <DeleteForever />
          </StyledDeleteButton>
        </div>{" "}
      </div>
    </div>
  )
}
