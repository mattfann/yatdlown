import { render, screen } from '@testing-library/react';
import ClearButton from './ClearButton.js';


xit('renders Heading', () => {
  render(<ClearButton />);
  const linkElement = screen.getByText("clear");
  expect(linkElement).toBeInTheDocument();
});
