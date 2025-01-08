import { HomePage } from "../../../src"
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('HomePage Tests', () => {
  it('should render the HeroMessage component', () => {
    render(<HomePage />);

    const heroMessage = screen.getByTestId('hero message');
    expect(heroMessage).toBeInTheDocument();
  });
})