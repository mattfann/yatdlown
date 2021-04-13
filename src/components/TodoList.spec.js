import { render, screen } from '@testing-library/react';
import TodoList from './TodoList.js';

it('renders Heading', () => {
  render(<TodoList />);
  const linkElement = screen.getByText("Yet Another Todo List!");
  expect(linkElement).toBeInTheDocument();
});
