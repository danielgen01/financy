import React from "react"
import { StyledBigCardWrapper, StyledAddButton } from "./BigCard.styles"
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
      <div className="headline flex justify-between">
        <h1 className="text-semibold text-2xl">{cardTitle}</h1>
        <StyledAddButton
          className="px-2 py-1 bg-green-500 text-green-200 rounded-md"
          endIcon={<AddCircleOutline />}
        >
          {buttonActionName}
        </StyledAddButton>
      </div>
      <div className="styled-list-wrapper flex flex-col gap-2 mt-10 ">
        <div className="headlines bg-gray-200 w-full flex justify-between px-2 py-1 rounded-md">
          {headlineItems?.map((headlineItem) => {
            return <span key={headlineItem + 1}>{headlineItem.headline}</span>
          })}
        </div>

        {listItems?.map((listItem: ListItemProps) => {
          return (
            <ListItem
              name={listItem.name}
              key={listItem.name + 1}
              cashflowAmount={listItem.cashflowAmount}
            />
          )
        })}
      </div>
      <div className="total bg-gray-300 flex w-full justify-center rounded-md py-3">
        <span className="styled-total-income">
          Total :{" "}
          <strong style={{ fontSize: "18px" }}>${determineTotal()}</strong>
        </span>
      </div>
    </StyledBigCardWrapper>
  )
}
