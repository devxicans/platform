import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroMessage } from '../../../../src';

jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.useFakeTimers();

describe('HeroMessage Component', () => {
  it('renders the initial phrase correctly', () => {
    render(<HeroMessage />);
    const heroMessage = screen.getByTestId('hero message');
    expect(heroMessage).toBeInTheDocument();
    expect(screen.getByTestId('hero message')).toHaveTextContent('We engineer the future while being humans');
  });

  it('updates the dynamic words every 3 seconds', () => {
    render(<HeroMessage />);

    expect(screen.getByTestId('hero message')).toHaveTextContent('We engineer the future while being humans');

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByTestId('hero message')).toHaveTextContent('We create the future while being developers');
  });

  it('cycles back to the first phrase after all dynamic words have been shown', () => {
    render(<HeroMessage />);

    act(() => {
      jest.advanceTimersByTime(9000);
    });

    expect(screen.getByTestId('hero message')).toHaveTextContent('We engineer the future while being humans');
  });
});
