import {
  getTheDistanceFromPointToLine,
  getTheDistanceOfAPointLineSegment,
  determineIfAPointIsWithinAnotherPointArea,
} from '../core/graphic';
import { Point } from '../core/graphic/Point';

test('getTheDistanceOfAPointLineSegment', () => {
  expect(getTheDistanceOfAPointLineSegment(new Point(-5, 0), new Point(0, 0), new Point(2, 0))).toBe(5);
});

test('getTheDistanceFromPointToLine', () => {
  expect(getTheDistanceFromPointToLine(new Point(-6, 1), new Point(0, 0), new Point(2, 0))).toBe(1);
});

test('determineIfAPointIsWithinAnotherPointArea', () => {
  expect(determineIfAPointIsWithinAnotherPointArea(new Point(1, 1), new Point(0, 0))).toBe(true);
});
