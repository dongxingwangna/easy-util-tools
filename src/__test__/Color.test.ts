import { Color } from '../index';

test('Color.hex', () => {
  expect(new Color(0, 0, 0).hex).toBe('#000000');
});

test('Color getHexColor', () => {
  expect(new Color(0, 0, 0).getHexColor()).toBe('#000000');
});

test('Color.rgb', () => {
  expect(new Color(0, 0, 0).rgb).toBe('rgb(0 0 0)');
});

test('Color getRgbColor', () => {
  expect(new Color(0, 0, 0).getRgbColor()).toBe('rgb(0 0 0)');
});

test('Color.channel', () => {
  expect(new Color(0, 0, 0).channel).toEqual({ r: 0, g: 0, b: 0 });
});

test('Color getChannelColor', () => {
  expect(new Color(0, 0, 0).getChannelColor()).toEqual({ r: 0, g: 0, b: 0 });
});

test('Color.channel', () => {
  expect(new Color(0, 0, 0).channel).toEqual({ r: 0, g: 0, b: 0 });
});

test('Color readRgbColor', () => {
  expect(new Color().readRgbColor(255, 255, 255).getChannelColor()).toEqual({ r: 1, g: 1, b: 1 });
});

test('Color readHexColor', () => {
  expect(new Color().readHexColor('#FFFFFF').getChannelColor()).toEqual({ r: 1, g: 1, b: 1 });
});

test('Color readChannelColor', () => {
  expect(new Color().readChannelColor(1, 1, 1).getHexColor()).toBe('#ffffff');
});

