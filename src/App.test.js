import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lets try', () => {
  render(<App />);
  const linkElement = screen.getByText(/let's try/i);
  expect(linkElement).toBeInTheDocument();
});