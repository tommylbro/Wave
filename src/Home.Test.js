import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders welcome message', () => {
  render(<Home />);
  const element = screen.getByText(/welcome/i);
  expect(element).toBeInTheDocument();
});
