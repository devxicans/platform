import { Button } from '../src'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Button component', () => {
  test('renders with children', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('applies className', () => {
    const className = 'btn_default';
    render(<Button className={className}>Submit</Button>);
    expect(screen.getByText('submit')).toHaveClass(className);
  });

  test('sets button type', () => {
    render(<Button type='submit'>Submit</Button>);
    expect(screen.getByText('Submit')).toHaveAttribute('type', 'submit');
  });

  test('handler onClick event', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Submit</Button>);
    fireEvent.click(screen.getByText('Submit'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  })
})