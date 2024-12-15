import { CustomInput } from '../src'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Custom Input component', () => {
  test('renders label correctly', () => {
    render(<CustomInput label='My input' type='text' id='my-input' placeholder='Write here'/>);
    expect(screen.getByText('My input')).toBeInTheDocument();
  });

  test('allows typing in the input field', () => {
    render(<CustomInput label='My input' type='text' id='my-input' placeholder='Write here' />);
    const inputElement = screen.getByPlaceholderText('Write here') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(inputElement.value).toBe('Hello');
  });

})