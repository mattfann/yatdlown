import { render, screen } from '@testing-library/react';
import TodoList from './TodoList.js';

it('renders Heading', () => {
  render(<TodoList />);
  const linkElement = screen.getByText("Yet Another Todo List!");
  expect(linkElement).toBeInTheDocument();
});
it('renders Save Button', () => {
  let result = render(<TodoList />) ;
  const linkElement = result.container.querySelector('#save');
  expect(linkElement).toBeInTheDocument();
});
it('renders Clear Button', () => {
  let result = render(<TodoList />) ;
  const linkElement = result.container.querySelector('#clear');
  expect(linkElement).toBeInTheDocument();
});
it('renders TextBox', () => {
  let result = render(<TodoList />) ;
  const linkElement = result.container.querySelector('#textbox');
  expect(linkElement).toBeInTheDocument();
});