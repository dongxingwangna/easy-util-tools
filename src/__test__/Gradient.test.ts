import { Gradient } from '../index';

test('Gradient', () => {
  expect(new Gradient().getColor(0).hex).toBe('#000000');
});
