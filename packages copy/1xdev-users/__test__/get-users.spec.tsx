import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../src/changable-button';

test('it toggles the text on button click', () => {
    render(<Button />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Click me!!');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('Thanks c:');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('Click me!!');
});
