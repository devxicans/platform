import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {CardCustom} from "../src"

describe('Card component', () => {
    test('renders with children', () => {
    render(<CardCustom>Test Content</CardCustom>);
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
  
    test('applies className', () => {
      const className = 'custom-class';
      render(<CardCustom className={className}>Test Content</CardCustom>);
      expect(screen.getByText('Test Content')).toHaveClass(className);
    });
  });
