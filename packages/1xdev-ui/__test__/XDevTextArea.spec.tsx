import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { XDevTextArea } from '../src';

describe('XDevTextArea area component tests', () => {
  test('Should render the customTextArea with label and icon', () => {
    render(<XDevTextArea label="Message" name="message" id="message-input" icon="Send" />);

    const input = screen.getByRole('textbox', { name: /message/i });
    const label = screen.getByText(/message/i);
    const icon = screen.queryByTestId('Icon');

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test('Should update the text area value on change', async () => {
    render(<XDevTextArea label="Message" name="message" id="message-input" icon="Send" />);

    const input = screen.getByRole('textbox', { name: /message/i });
    fireEvent.change(input, { target: { value: 'hola' } });

    expect(input).toHaveValue('hola');
  });

  test('Should render the maxLength', async () => {
    render(<XDevTextArea label="Message" name="message" id="message-input" icon="Send" maxLength={500}/>);
    expect(screen.getByTestId('charCounter')).toBeInTheDocument();
  });

  test('Should call onChange when value changes', () => {
    const mockOnChange = jest.fn();
    render(<XDevTextArea label="Message" name="message" id="message-input" icon="Send" onChange={mockOnChange}/>);
    const input = screen.getByRole('textbox', { name: /message/i });
    fireEvent.change(input, { target: { value: 'New message' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('Should change classname when character count equals 0', async () => {
    render(<XDevTextArea label="Message" name="message" id="message-input" icon="Send" maxLength={2}/>);
    const input = screen.getByRole('textbox', { name: /message/i });

    expect(screen.getByTestId('charCounter')).toHaveClass('characterCount');

    fireEvent.change(input, { target: { value: 'Si' } });
    expect(screen.getByTestId('charCounter')).toHaveClass('characterMax');
  });
});
