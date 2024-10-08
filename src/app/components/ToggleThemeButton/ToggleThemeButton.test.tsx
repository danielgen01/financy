import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggler } from "./ToggleThemeButton";
import { useTheme } from "next-themes";

// Mocking the useTheme hook from next-themes
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("ThemeToggler Component", () => {
  it("displays the DarkModeIcon when the theme is light", () => {
    // Mock the useTheme to return light theme
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: jest.fn(),
    });

    render(<ThemeToggler />);

    // Check if DarkModeIcon is present
    expect(screen.getByTestId("DarkModeIcon")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Turn off the light",
    );
  });

  it("displays the LightModeIcon when the theme is dark", () => {
    // Mock the useTheme to return dark theme
    (useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      setTheme: jest.fn(),
    });

    render(<ThemeToggler />);

    // Check if LightModeIcon is present
    expect(screen.getByTestId("LightModeIcon")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Turn on the light",
    );
  });

  it("toggles the theme when the button is clicked", () => {
    const setThemeMock = jest.fn();
    // Mock the useTheme to return light theme initially
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    });

    render(<ThemeToggler />);

    // Simulate a click on the button
    fireEvent.click(screen.getByRole("button"));

    // Assert that setTheme is called with the correct value
    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });
});
