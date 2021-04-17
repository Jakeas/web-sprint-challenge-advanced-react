import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    // render
    render(<CheckoutForm />)
    
    // query for inputs
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    // type in inputs
    userEvent.type(firstName, 'Jake')
    userEvent.type(lastName, 'Sierra')
    userEvent.type(address, '123 Abc Blvd')
    userEvent.type(city, 'Brewer')
    userEvent.type(state, 'ME')
    userEvent.type(zip, '04412')

    // query for submit button
    const button = screen.getByRole('button', /checkout/i)

    // click button
    userEvent.click(button)

    // query for success
    const successMessage = screen.getByTestId('successMessage')

    // assert
    expect(successMessage).toBeVisible()
    expect(successMessage).toBeInTheDocument()
});
