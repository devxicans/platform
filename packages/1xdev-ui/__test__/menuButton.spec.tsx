import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MenuButton } from '../src'

describe('Menu Button Component', () => {
  test('Should render the button with children', () => {
    render(<MenuButton href='/' icon='Home'>Home</MenuButton>);
    expect(screen.getByRole('link', {name: 'Home'})).toBeInTheDocument;
    expect(screen.getByText('Home')).toBeInTheDocument();
  })
  
  test('Should show icon on mouse enter and hide on mouse leave', () => {
    render(<MenuButton href="/" icon="Home">Home</MenuButton>);
    
    const button = screen.getByRole('link', { name: 'Home' });
    fireEvent.mouseEnter(button);
    expect(screen.getByTestId('Icon')).toBeInTheDocument();
    fireEvent.mouseLeave(button);
    expect(screen.queryByTestId('Icon')).toBeNull();
  });
})