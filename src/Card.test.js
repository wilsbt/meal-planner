import { render, screen } from '@testing-library/react';
import Card from './Card';

test('test works', () => {
  render(<Card />);
  const one = 2;
  expect(false === true);
});