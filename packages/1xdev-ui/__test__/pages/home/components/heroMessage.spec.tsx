import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroMessage } from '../../../../src/pages/home/components';

describe('Hero Message Component', () => {
  it('renders the initial phrase correctly', () => {
    render(<HeroMessage />);

    expect(screen.getByText('We')).toBeInTheDocument();
    expect(screen.getByText('engineer')).toBeInTheDocument();
    expect(screen.getByText('the')).toBeInTheDocument();
    expect(screen.getByText('future')).toBeInTheDocument();
    expect(screen.getByText('while')).toBeInTheDocument();
    expect(screen.getByText('being')).toBeInTheDocument();
    expect(screen.getByText('humans')).toBeInTheDocument();
  });
});