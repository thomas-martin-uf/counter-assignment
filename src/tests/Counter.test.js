import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/Counter.js";

beforeEach(() => {
    // render counter to screen before every test
    render(<Counter />);
});

test("renders counter message", () => {
    // check for counter message on screen text
    const counterElement = screen.getByText(/counter/i);
    expect(counterElement).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
    // check that the element has 0 value
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
    // get increment button by text then fire event to simulate click
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);

    // get the count element and expect it to have an increase count
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
    // get increment button by text then fire event to simulate click
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);

    // get the decrement button by text then fire event to simulate click
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);

    // get the count element by test id and expect the count to be 0 since we increased then decreased
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("0");
});
