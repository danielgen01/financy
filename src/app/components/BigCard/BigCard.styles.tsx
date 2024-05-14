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

//TODO: conditional styling currently not workoing
export const StyledAddButton = styled(Button)<BigCardProps>`
  color: ${({ color }) => (color === "red" ? "#ff0000" : "#0b9055")};

  svg {
    color: ${({ color }) => (color === "red" ? "#ff0000" : "#0b9055")};
  }
  font-size: 14px;
  background-color: rgba(11, 144, 85, 0.25);
`

export const StyledBigCardHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledHeadlineAndListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledHeadlineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 10px 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
`
export const StyledTotalAmountWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 0px 15px 0px;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin-top: auto;
`

export const StyledCardTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`
