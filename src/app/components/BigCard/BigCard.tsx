import React from "react"
import {
  StyledAddButton,
  StyledBigCardWrapper,
  StyledDeleteButton,
  StyledEdit,
} from "./BigCard.styles"
import { AddCircleOutline, DeleteForever } from "@mui/icons-material"
import EditIcon from "@mui/icons-material/Edit"

import { Button } from "@mui/material"

export const BigCard = () => {
  return (
    <StyledBigCardWrapper>
      <div className="headline flex justify-between">
        <h1 className="text-semibold text-2xl">Income</h1>
        <StyledAddButton
          className="px-2 py-1 bg-green-500 text-green-200 rounded-md"
          endIcon={<AddCircleOutline />}
        >
          Add income
        </StyledAddButton>
      </div>
      <div className="styled-list-wrapper flex flex-col gap-2 mt-10 ">
        <div className="headlines bg-gray-200 w-full flex justify-between px-2 py-1 rounded-md">
          <span>Description</span>
          <span>Cash Flow</span>
          <span>Actions</span>
        </div>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <div className="total bg-gray-300 flex w-full justify-center rounded-md py-3">
        <span className="styled-total-income">Total income: $12000</span>
      </div>
    </StyledBigCardWrapper>
  )
}

export const ListItem = () => {
  return (
    <div className="Styled-ListItem-wrapper flex  justify-between px-2 py-1 w-full">
      <div className="Styled-Name-Wrapper flex justify-start  w-full">
        <span className="name">Salary</span>
      </div>

      <div className="Styled-Price-Wrapper flex justify-center   w-full ">
        <span className="cash-flow flex justify-center ">$2600</span>
      </div>

      <div className="Styled-Actions-Wrapper flex justify-end  w-full">
        <div className="actions flex gap-2">
          <StyledEdit>
            <EditIcon />
          </StyledEdit>
          <StyledDeleteButton>
            <DeleteForever />
          </StyledDeleteButton>
        </div>{" "}
      </div>
    </div>
  )
}
