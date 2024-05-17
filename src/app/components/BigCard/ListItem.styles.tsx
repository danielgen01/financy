import styled from "@emotion/styled"
import { IconButton } from "@mui/material"

export const StyledEditButtonWrapper = styled(IconButton)`
  background-color: #3477f5;
  color: white;
  border-radius: 10rem;

  &:hover {
    background-color: #3457f1;
  }
`

export const StyledDeleteButton = styled(IconButton)`
  background-color: #9e4bf6;
  color: white;
  border-radius: 10rem;
  

  &:hover {
    background-color: #9e1bf1;
  }
`
export const StyledListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
`
export const StyledNameWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;

  @media screen and (max-width: 768px) {
    /* Für Geräte mit einer Breite von 768px oder weniger */
    display: -webkit-box; /* Altes Webkit */
    -webkit-box-orient: vertical; /* Altes Webkit */
    -webkit-line-clamp: 1; /* Altes Webkit, begrenzt die Anzahl der Textzeilen */
  }
`
export const StyledPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const StyledCashflowAmount = styled.div`
  display: flex;
  justify-content: center;
`
export const StyledActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 5px;
`
