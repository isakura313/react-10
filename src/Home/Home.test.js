import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

test('Проверка на приветствие', () => {
  render(<Home />);
  const header = screen.getByText(/Добро пожаловать/i);
  expect(header).toBeInTheDocument();
});
