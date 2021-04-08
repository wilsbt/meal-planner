import { render, screen } from '@testing-library/react';
import Card from './Card';

test('test works', () => {
  render(<Card />);
  const one = 0;
  expect(one == 1);
});