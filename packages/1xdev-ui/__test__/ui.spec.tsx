import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../src'

describe('Button Component', () => {
  test('Should render the button with children', () => {
    render(<Button type='submit'>Submit</Button>);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  })
  test('Should render the button with his children and type', () => {
    render(<Button type='submit'>Submit</Button>);
    expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit');
  })
})