import { render, screen } from "@testing-library/react"
import React from "react"

import Card from "./Card"

const defaultProps = {
  title: "Test Title",
  amount: 1000,
  performance: 5.5,
  isBalanceCard: false,
}

describe("Card Component", () => {
  test("renders the card title", () => {
    render(<Card {...defaultProps} />)
    const titleElement = screen.getByText(/Test Title/i)
    expect(titleElement).toBeInTheDocument()
  })

  test("renders the amount when provided", () => {
    render(<Card {...defaultProps} />)
    const amountElement = screen.getByText("€ 1000")
    expect(amountElement).toBeInTheDocument()
  })

  test("renders performance with an up arrow", () => {
    render(<Card {...defaultProps} />)
    const performanceElement = screen.getByText("5.5%")
    expect(performanceElement).toBeInTheDocument()

    const arrowIcon = screen.getByRole("img", { hidden: true })
    expect(arrowIcon).toHaveClass("svg-inline--fa")

    screen.logTestingPlaygroundURL()
  })

  test("applies the correct styling based on isBalanceCard prop", () => {
    const propsWithBalanceCard = { ...defaultProps, isBalanceCard: true }
    render(<Card {...propsWithBalanceCard} />)
    const amountElement = screen.getByText("€ 1000")
    expect(amountElement).toHaveClass("StyledAmountPurpleColour")
  })
})
