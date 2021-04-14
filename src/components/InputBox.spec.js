import { render, screen } from '@testing-library/react';
import InputBox from './InputBox.js';


xit('renders Heading', () => {
  render(<InputBox />);
 const linkElement = screen.getByTestId("inputbox")
 expect(linkElement).toBeInTheDocument();
});
