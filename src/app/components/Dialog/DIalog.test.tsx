import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"

import { Dialog } from "./Dialog"
import type { CustomDialogProps } from "./Dialog.types"

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: (fn: any) => (e: any) => {
      e.preventDefault()
      fn()
    },
    formState: { errors: {} },
  })),
}))

jest.mock("./SubComponents", () => ({
  formatToTwoDecimalPlaces: jest.fn((value) => parseFloat(value).toFixed(2)),
}))

describe("Dialog Component", () => {
  const defaultProps: CustomDialogProps = {
    open: true,
    onClose: jest.fn(),
    addCardItem: jest.fn(),
    editCardItem: jest.fn(),
    dialogTitle: "Add Income",
    dialogContent: { name: "Sample Income", cashflowAmount: 100 },
    buttonActionName: "Add Income",
  }

  it("renders Dialog with the correct title and default values", () => {
    render(<Dialog {...defaultProps} />)
    expect(screen.getByText("Add Income")).toBeInTheDocument()
    expect(screen.getByDisplayValue("Sample Income")).toBeInTheDocument()
    expect(screen.getByDisplayValue("100")).toBeInTheDocument()
  })

  it("calls addCardItem with correct values when the form is submitted", () => {
    const addCardItemMock = jest.fn()
    render(<Dialog {...defaultProps} addCardItem={addCardItemMock} />)

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "New Income" },
    })
    fireEvent.change(screen.getByLabelText(/Amount/i), {
      target: { value: "200" },
    })

    fireEvent.click(screen.getByRole("button", { name: /add/i }))

    expect(addCardItemMock).toHaveBeenCalledWith("New Income", "200.00")
  })

  it("calls editCardItem with correct values when the form is submitted", () => {
    const editCardItemMock = jest.fn()
    render(
      <Dialog
        {...defaultProps}
        editCardItem={editCardItemMock}
        dialogTitle="Edit Income"
      />
    )

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "Updated Income" },
    })
    fireEvent.change(screen.getByLabelText(/Amount/i), {
      target: { value: "300" },
    })

    fireEvent.click(screen.getByRole("button", { name: /edit/i }))

    expect(editCardItemMock).toHaveBeenCalledWith("Updated Income", "300.00")
  })

  it('renders the passive income checkbox when buttonActionName is "Add Income"', () => {
    render(<Dialog {...defaultProps} />)
    expect(
      screen.getByLabelText("This income is earned passively*")
    ).toBeInTheDocument()
  })

  it('does not render the passive income checkbox when buttonActionName is not "Add Income"', () => {
    render(<Dialog {...defaultProps} buttonActionName="Edit Income" />)
    expect(
      screen.queryByLabelText("This income is earned passively*")
    ).not.toBeInTheDocument()
  })
})
