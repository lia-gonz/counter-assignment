import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  // Render the Counter component here
	render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
	const counterMsg = screen.getByText(/Counter/);
	expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
	const initCount = screen.getByText(/0/);
	expect(initCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
	const count = screen.getByTestId('count');
	expect(count).toHaveTextContent('0');
	const incButton = screen.getByText('+');
	userEvent.click(incButton);
	expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
	const count = screen.getByTestId('count');
	expect(count).toHaveTextContent('0');
	const decButton = screen.getByText('-');
	userEvent.click(decButton);
	expect(count).toHaveTextContent('-1');
});
