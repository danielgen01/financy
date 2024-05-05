import React from "react"
import styled from "@emotion/styled"
import { Button, IconButton } from "@mui/material"

export const StyledBigCardWrapper = styled.div`
  padding: 30px 20px;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledAddButton = styled(Button)`
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #388e3c;
  }
`
export const StyledEdit = styled(IconButton)`
  background-color: blue;
  color: white;
  border-radius: 10rem;

  &:hover {
    background-color: #388e3c;
  }
`

export const StyledDeleteButton = styled(IconButton)`
  background-color: purple;
  color: white;
  border-radius: 10rem;

  &:hover {
    background-color: #388e3c;
  }
`
