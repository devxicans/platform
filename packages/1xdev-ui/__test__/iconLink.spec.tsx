import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconLink } from '../src'

describe('Menu Button Component', () => {
  test('Should render the button with children', () => {
    render(<IconLink href='/' icon='Home'>Home</IconLink>);
    expect(screen.getByRole('link', {name: 'Home'})).toBeInTheDocument;
    expect(screen.getByText('Home')).toBeInTheDocument();
  })
  
  test('Should show icon on mouse enter and hide on mouse leave', () => {
    render(<IconLink href="/" icon="Home">Home</IconLink>);
    
    const button = screen.getByRole('link', { name: 'Home' });
    fireEvent.mouseEnter(button);
    expect(screen.getByTestId('Icon')).toBeInTheDocument();
    fireEvent.mouseLeave(button);
    expect(screen.queryByTestId('Icon')).toBeNull();
  });
})