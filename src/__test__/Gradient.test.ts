import { Gradient } from '../index';

test('Gradient', () => {
  expect(new Gradient().getColor(0).getHexColor()).toBe('#000000');
});
