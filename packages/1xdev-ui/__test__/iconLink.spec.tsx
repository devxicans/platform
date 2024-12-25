import { render, screen, fireEvent,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconLink } from '../src'

describe('Icon Link Component', () => {
  test('Should render the link with children', () => {
    render(<IconLink href='/' icon='Home'>Home</IconLink>);
    expect(screen.getByRole('link', {name: 'Home'})).toBeInTheDocument;
    expect(screen.getByText('Home')).toBeVisible();
  })
  
  test('Should show icon on mouse enter and hide on mouse leave', async () => {
    render(<IconLink href="/" icon="Home">Home</IconLink>);
    
    const link = screen.getByRole('link', { name: 'Home' });
    fireEvent.mouseEnter(link);
    await waitFor(() => expect(screen.getByTestId('Icon')).toBeVisible(), { timeout: 500 });
    fireEvent.mouseLeave(link);
    expect(screen.queryByTestId('Icon')).not.toBeInTheDocument();
  });
})