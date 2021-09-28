import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, Xuxinha', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, Xuxinha/i);
  expect(linkElement).toBeInTheDocument();
});
