import { render, screen } from '@testing-library/react';
import SaveButton from './SaveButton.js';


xit('renders Heading', () => {
  render(<SaveButton />);
  const linkElement = screen.getByText("Save");
  expect(linkElement).toBeInTheDocument();
});
