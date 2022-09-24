import { Color } from '../index';

test('Color getHexColor', () => {
  expect(new Color(0, 0 ,0).getHexColor()).toBe("#000000");
});

test('Color getRgbColor', () => {
  expect(new Color(0, 0 ,0).getRgbColor()).toBe("rgb(0 0 0)");
});

test('Color getChannelColor', () => {
  expect(new Color(0, 0 ,0).getChannelColor()).toEqual({r: 0, g: 0, b: 0});
});
