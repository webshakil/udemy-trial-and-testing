import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter component', () => {
  it('increments and decrements the count when the buttons are clicked', async () => {
    render(<Counter />);
    
    // Find the initial count element
    const countElement = await screen.findByTestId('count');

    // Find the increment and decrement buttons
    const incrementButton = await screen.findByTestId('increment-button');
    const decrementButton = await screen.findByTestId('decrement-button');

    // The count should start at 0
    expect(countElement).toHaveTextContent('0');

    // Click the increment button and wait for the count to update
    userEvent.click(incrementButton);
    const updatedCountElement = await screen.findByTestId('count');
    expect(updatedCountElement).toHaveTextContent('1');

    // Click the decrement button and wait for the count to update
    userEvent.click(decrementButton);
    const updatedCountElementAfterDecrement = await screen.findByTestId('count');
    expect(updatedCountElementAfterDecrement).toHaveTextContent('0');
  });
});

