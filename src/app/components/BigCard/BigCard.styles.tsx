import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { BigCardProps } from "./BigCard.types"

export const StyledBigCardWrapper = styled.div`
  padding: 30px 20px;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledAddButton = styled(Button)<BigCardProps>`
  color: ${({ color }) => (color === "red" ? "#ff0000" : "#0b9055")};

  svg {
    color: ${({ color }) => (color === "red" ? "#ff0000" : "#0b9055")};
  }
`
