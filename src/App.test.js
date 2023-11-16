import { render, screen } from '@testing-library/react';
import App from './App';

test('Teste título', () => {
  render(<App />);
  const testCase = document.querySelector('p.title');
  expect(testCase).toHaveTextContent(/memegram/i);
});
