import styled from "@emotion/styled"
import { Paper } from "@mui/material"

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`

export const StyledAmount = styled.p`
  font-weight: 600;
  font-size: 36px;
  color: #5854c0;
  margin: 0;
`
export const StyledAmountAndPerformanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`

export const StyledPaper = styled(Paper)`
  border-radius: 0.5rem;
`
