import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('renders form', () => {
    render(<ContactForm />);

    screen.getByText(/first name/i);
    screen.getByText(/last name/i);
    screen.getByText(/email/i);
    screen.getByText(/message/i);

    screen.getByPlaceholderText(/edd/i);
    screen.getByPlaceholderText(/burke/i);
    screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
});

test('can type into form and submit', () => {
    render(<ContactForm />);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);

        userEvent.type(firstName, 'jay');
        userEvent.type(lastName, 'lenno');
        userEvent.type(email, 'dhdso@gmail.com');
        userEvent.type(message, 'hey');

    expect(firstName).toHaveValue('jay');
    expect(lastName).toHaveValue('lenno');
    expect(email).toHaveValue('dhdso@gmail.com');
    expect(message).toHaveValue('hey');
    
    const submit = screen.getByTestId(/submit/i);
    
    userEvent.click(submit);

    const data = screen.findByText(/"firstName": "jay"/i);

    expect(data).toBeTruthy();
});