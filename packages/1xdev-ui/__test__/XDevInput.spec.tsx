import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { XDevInput } from '../src';

describe('XDevInput component tests', () => {
  test('Should render the CustomInput with label and icon', () => {
    render(<XDevInput type="text" label="Mail" name="mail" id="mail-input" icon="Mail" />);

    const input = screen.getByRole('textbox', { name: /mail/i });
    const label = screen.getByText(/mail/i);
    const icon = screen.queryByTestId('Icon');

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test('Should update the input value on change', async () => {
    render(<XDevInput type="text" label="Mail" name="mail" id="mail-input" icon="Mail" />);

    const input = screen.getByRole('textbox', { name: /mail/i });
    fireEvent.change(input, { target: { value: 'test@mail.com' } });

    expect(input).toHaveValue('test@mail.com');
  });
});
