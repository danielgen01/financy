import { styled } from "styled-components"

export const StyledHeaderWrapper = styled.nav`
  background-color: #ffffff;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const StyledMenuList = styled.ul`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const StyledAccountActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`
