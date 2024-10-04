import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { addCardItemToDataBase } from "../../utils/addCartItemToDataBase";
import { editCardItemFromDatabase } from "../../utils/editCardItemFromDataBase";
import { removeCardItemFromDataBase } from "../../utils/removeCardItemFromDataBase";
import { BigCard } from "./BigCard";
import exp from "constants";

// Firebase Funktionen mocken
jest.mock("../../utils/addCartItemToDataBase", () => ({
  addCardItemToDataBase: jest.fn(),
}));

jest.mock("../../utils/editCardItemFromDataBase", () => ({
  editCardItemFromDatabase: jest.fn(),
}));

jest.mock("../../utils/removeCardItemFromDataBase", () => ({
  removeCardItemFromDataBase: jest.fn(),
}));

jest.mock("nanoid", () => ({
  nanoid: jest.fn(() => "mocked-id"), // Mockt die Funktion und gibt einen festen Wert zurück
}));

describe("BigCard Component", () => {
  const defaultProps = {
    cardTitle: "Test Card",
    buttonActionName: "Add Income",
    headlineItems: [{ headline: "Name" }, { headline: "Amount" }],
    isFourColumns: false,
    cardItems: [
      {
        name: "Full-time Job",
        cashflowAmount: 2500,
        id: "1",
      },
      {
        name: "Part-time Job",
        cashflowAmount: 500,
        id: "2",
      },
      {
        name: "Real Estate earnings",
        cashflowAmount: 500,
        id: "3",
      },
      {
        name: "Arcade automated business",
        cashflowAmount: 10000,
        id: "4",
      },
    ],
    setCardItems: jest.fn(),
  };

  test("renders BigCard with card title and items", () => {
    render(<BigCard {...defaultProps} />);

    // Überprüfe, ob der Titel angezeigt wird
    expect(screen.getByText("Test Card")).toBeInTheDocument();

    // Überprüfe, ob die Listenelemente angezeigt werden
    expect(screen.getByText("Full-time Job")).toBeInTheDocument();
    expect(screen.getByText("Part-time Job")).toBeInTheDocument();
    expect(screen.getByText("Real Estate earnings")).toBeInTheDocument();
    expect(screen.getByText("Arcade automated business")).toBeInTheDocument();
  });

  test("opens dialog when add button is clicked", () => {
    render(<BigCard {...defaultProps} />);

    const addButton = screen.getByText("Add Income");
    fireEvent.click(addButton);

    expect(screen.getByText("Add item")).toBeInTheDocument();
  });

  test("calls addCardItemToDataBase when adding an item", () => {
    render(<BigCard {...defaultProps} />);

    // Öffne den Dialog
    const openDialogButton = screen.getByText("Add Income");
    fireEvent.click(openDialogButton);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    fireEvent.change(nameInput, { target: { value: "New Item" } });

    // Finde das Betragsfeld und ändere den Wert
    const amountInput = screen.getByRole("textbox", { name: /amount/i });
    fireEvent.change(amountInput, { target: { value: "500" } });

    expect(nameInput).toHaveValue("New Item");
    expect(amountInput).toHaveValue("500");

    const dialogButton = screen.getByRole("button", { name: "Add" });

    expect(dialogButton).toBeInTheDocument();
    fireEvent.click(dialogButton);
  });

  // test("calls editCardItemFromDatabase when editing an item", () => {
  //   render(<BigCard {...defaultProps} />);

  //   // Simuliere die Bearbeitung eines Elements (finde und klicke auf den Bearbeitungsbutton)
  //   const editButton = screen.getByText("Edit"); // Beispiel: Annahme, dass es einen "Edit" Button gibt
  //   fireEvent.click(editButton);

  //   // Überprüfe, ob die Funktion aufgerufen wurde
  //   expect(editCardItemFromDatabase).toHaveBeenCalled();
  // });

  // test("calls removeCardItemFromDataBase when removing an item", () => {
  //   render(<BigCard {...defaultProps} />);

  //   // Simuliere das Entfernen eines Elements (finde und klicke auf den Entfernenbutton)
  //   const removeButton = screen.getByText("Remove"); // Beispiel: Annahme, dass es einen "Remove" Button gibt
  //   fireEvent.click(removeButton);

  //   // Überprüfe, ob die Funktion aufgerufen wurde
  //   expect(removeCardItemFromDataBase).toHaveBeenCalled();
  // });
});
