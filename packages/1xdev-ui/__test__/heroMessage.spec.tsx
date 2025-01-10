import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AnimatedHeading } from '../src';

jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.useFakeTimers();

describe('AnimatedHeading Component', () => {
  const phrase = "We {keyWords} the future while being {keyDescriptions}";
  const keyWords = ["{engineer}", "{create}", "{code}"];
  const keyDescriptions = ["{humans}", "{developers}", "{artists}"];

  it('renders the initial phrase correctly', () => {
    render(<AnimatedHeading phrase={phrase} keyWords={keyWords} keyDescriptions={keyDescriptions} />);

    const element = screen.getByTestId('hero message');

    expect(element).toHaveTextContent('We engineer the future while being humans');
  });

  it('updates the dynamic words every 3 seconds', () => {
    render(<AnimatedHeading phrase={phrase} keyWords={keyWords} keyDescriptions={keyDescriptions} />);

    const element = screen.getByTestId('hero message');

    expect(element).toHaveTextContent('We engineer the future while being humans');

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(element).toHaveTextContent('We create the future while being developers');
  });

  it('cycles back to the first phrase after all dynamic words have been shown', () => {
    render(<AnimatedHeading phrase={phrase} keyWords={keyWords} keyDescriptions={keyDescriptions} />);

    const element = screen.getByTestId('hero message');

    act(() => {
      jest.advanceTimersByTime(9000);
    });

    expect(element).toHaveTextContent('We engineer the future while being humans');
  });
});
