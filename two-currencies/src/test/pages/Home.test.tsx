import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../../pages/Home";

describe("Home Page:", () => {
  const PLACEHOLDER_INPUT_ELEMENT_VALUE = "* Enter value (USD 🇺🇸)";
  let inputElement: HTMLElement;

  beforeEach(() => {
    render(<Home />);
    inputElement = screen.getByPlaceholderText(PLACEHOLDER_INPUT_ELEMENT_VALUE);
  });

  describe("displays:", () => {
    test("showing title", () => {
      const titleH1 = screen.getByText("USD🇺🇸 to BRL🇧🇷");
      expect(titleH1).toBeInTheDocument();
    });

    test("Input Component is present", () => {
      expect(inputElement).toBeInTheDocument();
    });
  });

  describe("writing/digits in input:", () => {
    test('trying writing empty text in Input, the value transform to empty text ""', () => {
      fireEvent.change(inputElement, { target: { value: "" } });
      expect(inputElement).toHaveValue("");
    });

    test('trying writing text in Input, the value transform to number "0,00"', () => {
      fireEvent.change(inputElement, { target: { value: "abcd" } });
      expect(inputElement).toHaveValue("0,00");
    });

    test('writing "1234" in Input transform value to "12,34"', () => {
      fireEvent.change(inputElement, { target: { value: "1234" } });
      expect(inputElement).toHaveValue("12,34");
    });

    test('writing "1234567890" in Input transform value to "12.345.678,90"', () => {
      fireEvent.change(inputElement, { target: { value: "1234567890" } });
      expect(inputElement).toHaveValue("12.345.678,90");
    });
  });
});
