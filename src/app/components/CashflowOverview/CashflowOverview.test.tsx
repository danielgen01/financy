import { render, screen } from "@testing-library/react"
import { useTheme } from "next-themes"
import React from "react"

import type { CashflowOverviewProps } from "./CashflowOverview"
import CashflowOverview from "./CashflowOverview"

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}))

// eslint-disable-next-line react/display-name
jest.mock("../MuiSkeleton/MuiSkeleton", () => () => (
  <div data-testid="mui-skeleton" />
))

jest.mock("./SubComponents", () => ({
  roundToFixed: jest.fn((value) => value.toFixed(2)),
}))

describe("CashflowOverview Component", () => {
  const mockUseTheme = useTheme as jest.Mock

  beforeEach(() => {
    mockUseTheme.mockReturnValue({ theme: "light" })
  })

  const defaultProps: CashflowOverviewProps = {
    netCashflowAmount: 1000,
    incomeTotal: 2000,
    expenseTotal: 1000,
  }

  it("displays income and expense totals correctly when values are provided", () => {
    render(<CashflowOverview {...defaultProps} />)
    expect(screen.getByText("2000.00")).toBeInTheDocument()
    expect(screen.getByText("1000.00")).toBeInTheDocument()
  })

  it("renders MuiSkeleton components when incomeTotal is not provided", () => {
    render(
      <CashflowOverview
        netCashflowAmount={0}
        incomeTotal={0}
        expenseTotal={0}
      />
    )
    expect(screen.getAllByTestId("mui-skeleton")).toHaveLength(3)
  })

  it("displays the net cashflow amount correctly when provided", () => {
    render(<CashflowOverview {...defaultProps} />)
    expect(screen.getByText("€ 1000.00")).toBeInTheDocument()
  })
})
