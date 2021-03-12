import React from "react";
import { screen, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test("page renders", () => {
    render(<CheckoutForm />)
})

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.queryByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    //submit
    //success message appears with form details
});
    

