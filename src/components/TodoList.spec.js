import { render, screen } from '@testing-library/react';
import TodoList from './TodoList.js';
import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'

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
it('displays todo item', () => {
  render(<TodoList />) ;
   userEvent.type(screen.getByRole('textbox'), 'my first todo');
   userEvent.click(screen.getByText('Save'))
   const linkElement = screen.getByText("my first todo")
   expect(linkElement).toBeInTheDocument();
});
// it('todo is completed', () => {
//   render(<TodoList />) ;
//    userEvent.type(screen.getByRole('textbox'), 'my first todo');
//    userEvent.click(screen.getByText('Save'))
//    userEvent.click(screen.getByLabelText('my first todo'))
//    const linkElement = screen.getByText('my first todo')
//    expect(linkElement).toHaveStyle({
//      text-decoration: 'line-through'});
// });

it('clears todo item', () => {
  render(<TodoList />) ;
   userEvent.type(screen.getByRole('textbox'), 'my first todo');
   userEvent.click(screen.getByText('Save'))
   userEvent.click(screen.getByText('Clear'))
   const linkElement= screen.queryByText('my first todo')
   expect(linkElement).not.toBeInTheDocument();
});