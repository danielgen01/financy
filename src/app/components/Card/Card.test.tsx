import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card Component", () => {
  it("renders the card with title, amount, and performance", () => {
    render(
      <Card
        title="Balance"
        amount={1000}
        performance={5}
        isBalanceCard={false}
      />,
    );

    expect(screen.getByText("Balance")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("5%")).toBeInTheDocument();
  });

  it("applies the correct styling for balance card", () => {
    render(
      <Card
        title="Balance"
        amount={1999}
        performance={5}
        isBalanceCard={true}
      />,
    );

    const amountElement = screen.getByText("1999");
    expect(amountElement).toHaveClass("StyledAmountPurpleColour");
  });

  it("applies the default styling when isBalanceCard is false", () => {
    render(
      <Card
        title="Balance"
        amount={1000}
        performance={5}
        isBalanceCard={false}
      />,
    );

    // Check if the amount has the default styling
    const amountElement = screen.getByText("1000");
    expect(amountElement).toHaveClass("StyledAmount");
  });
});
