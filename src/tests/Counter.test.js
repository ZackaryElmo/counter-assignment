// import necessary react testing library helpers here
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const checkCounter = screen.getByText("Counter");
  expect(checkCounter).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const zeroTest = screen.getByTestId('count');
  expect(zeroTest).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const button = screen.getByText('+');
  const getButtonValue = screen.getByTestId('count');
  fireEvent.click(button);
  expect(getButtonValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const button = screen.getByText('-');
  const getButtonValue = screen.getByTestId('count');
  fireEvent.click(button);
  expect(getButtonValue).toHaveTextContent('-1');
});
