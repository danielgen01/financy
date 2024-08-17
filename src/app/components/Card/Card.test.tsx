import React from "react";
import { render, screen } from "@testing-library/react";
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
  });
});
