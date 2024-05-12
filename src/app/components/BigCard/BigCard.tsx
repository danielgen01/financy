import React from "react"
import {
  StyledBigCardWrapper,
  StyledAddButton,
  StyledBigCardHeadWrapper,
  StyledHeadlineAndListWrapper,
  StyledHeadlineWrapper,
  StyledTotalAmountWrapper,
  StyledCardTitle,
} from "./BigCard.styles"
import { AddCircleOutline } from "@mui/icons-material"
import { ListItem } from "./ListItem"
import { BigCardProps } from "./BigCard.types"
import { ListItemProps } from "./ListItem.types"

export const BigCard: React.FC<BigCardProps> = ({
  listItems,
  cardTitle,
  buttonActionName,
  headlineItems,
}) => {
  const determineTotal = () => {
    let total = 0
    listItems?.forEach((listItem: ListItemProps) => {
      total += listItem.cashflowAmount
    })
    return total
  }
  return (
    <StyledBigCardWrapper>
      <StyledBigCardHeadWrapper>
        <StyledCardTitle>{cardTitle}</StyledCardTitle>
        <StyledAddButton endIcon={<AddCircleOutline />}>
          {buttonActionName}
        </StyledAddButton>
      </StyledBigCardHeadWrapper>
      <StyledHeadlineAndListWrapper>
        <StyledHeadlineWrapper>
          {headlineItems?.map((headlineItem) => {
            return (
              <span key={headlineItem.headline + 1}>
                {headlineItem.headline}
              </span>
            )
          })}
        </StyledHeadlineWrapper>

        {listItems?.map((listItem: ListItemProps) => {
          return (
            <ListItem
              name={listItem.name}
              key={listItem.name + 1}
              cashflowAmount={listItem.cashflowAmount}
            />
          )
        })}
      </StyledHeadlineAndListWrapper>
      <StyledTotalAmountWrapper>
        <span>
          Total :{" "}
          <strong style={{ fontSize: "18px" }}>${determineTotal()}</strong>
        </span>
      </StyledTotalAmountWrapper>
    </StyledBigCardWrapper>
  )
}
