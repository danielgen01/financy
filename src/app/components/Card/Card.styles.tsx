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
  margin: 0;
`
export const StyledAmountAndPerformanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin: 0;
`

export const StyledPaper = styled(Paper)`
  border-radius: 0.5rem;
  transition:
    box-shadow 0.3s,
    transform 0.3s;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
  }
`

export const StyledPerformanceOverview = styled.p`
  color: #516778;
`
