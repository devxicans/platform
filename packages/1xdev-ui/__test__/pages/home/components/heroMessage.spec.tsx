import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroMessage } from '../../../../src/pages/home/components';

jest.mock('./components/renderDynamicPhrase', () => ({
  renderDynamicPhrase: jest.fn(() => ({
    getPhrase: jest.fn(() => "We {engineer} the future while being {humans}"),
    next: jest
      .fn()
      .mockImplementationOnce(() => "We {create} the future while being {developers}")
      .mockImplementationOnce(() => "We {code} the future while being {artists}"),
    splitPhrase: jest.fn((phrase) => {
      const parts = phrase.split(/(\{[^}]+\})/g);
      return parts.map((content: string, index: number) => ({
        content,
        isDynamic: content.startsWith('{') && content.endsWith('}'),
        key: `part-${index}`,
      }));
    }),
  })),
}));

describe('Hero Message Component', () => {
  jest.useFakeTimers();

  it('renders the initial phrase correctly', () => {
    render(<HeroMessage />);

    expect(screen.getByText('We')).toBeInTheDocument();
    expect(screen.getByText('engineer')).toBeInTheDocument();
    expect(screen.getByText('the future while being')).toBeInTheDocument();
    expect(screen.getByText('humans')).toBeInTheDocument();
  });

  it('changes the dynamic words every 3 seconds', () => {
    render(<HeroMessage />);

    expect(screen.getByText('engineer')).toBeInTheDocument();
    expect(screen.getByText('humans')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText('create')).toBeInTheDocument();
    expect(screen.getByText('developers')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText('code')).toBeInTheDocument();
    expect(screen.getByText('artists')).toBeInTheDocument();
  });

  it('applies the correct animation classes', () => {
    render(<HeroMessage />);

    const dynamicElements = screen.getAllByText(/engineer|humans/);

    dynamicElements.forEach((element) => {
      expect(element).toHaveClass('dynamic');
    });
  });
});