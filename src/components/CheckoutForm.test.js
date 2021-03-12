import React from "react";
import { screen, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows
test("page renders", () => {
    render(<CheckoutForm />)
})

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.queryByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const button =screen.getByRole("button");
    userEvent.click(button)
    
    const successMsg = screen.getByTestId("successMessage")
    
    expect(successMsg).toBeInTheDocument()
    
    const text = screen.getByText(/you have ordered some plants!/i)

    expect(text).toBeInTheDocument()
});
    

