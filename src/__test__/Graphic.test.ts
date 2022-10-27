import {
  getTheDistanceFromPointToLine,
  getTheDistanceOfAPointLineSegment,
  determineIfAPointIsWithinAnotherPointArea, getTheDistanceBetweenTwoPoints
} from "../core/graphic";
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

/**
 * 两点间距离
 */
test('getTheDistanceBetweenTwoPoints', () =>{
  expect(getTheDistanceBetweenTwoPoints(new Point(-1, 0), new Point(2, 4))).toBe(5)
})
