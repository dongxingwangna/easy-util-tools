/**
 * @docName: index.ts
 * @Author: wdx
 * @Date: 2022/9/24  14:41
 */

import { Point } from './Point';

/**
 * 获取点到线段的距离
 * @param point {Point}
 * @param lineStart {Point}
 * @param lienEnd {Point}
 */
export function getTheDistanceOfAPointLineSegment(point: Point, lineStart: Point, lienEnd: Point): number {
  if (lineStart.x === lienEnd.x && lineStart.y === lienEnd.y)
    return Math.sqrt(
      (point.x - lineStart.x) * (point.x - lineStart.x) + (point.y - lineStart.y) * (point.y - lineStart.y),
    );
  let r =
    ((point.x - lineStart.x) * (lienEnd.x - lineStart.x) + (point.y - lineStart.y) * (lienEnd.y - lineStart.y)) /
    ((lienEnd.x - lineStart.x) * (lienEnd.x - lineStart.x) + (lienEnd.y - lineStart.y) * (lienEnd.y - lineStart.y));
  if (r <= 0)
    return Math.sqrt(
      (point.x - lineStart.x) * (point.x - lineStart.x) + (point.y - lineStart.y) * (point.y - lineStart.y),
    );
  if (r >= 1)
    return Math.sqrt((point.x - lienEnd.x) * (point.x - lienEnd.x) + (point.y - lienEnd.y) * (point.y - lienEnd.y));
  let px = lineStart.x + (lienEnd.x - lineStart.x) * r;
  let py = lineStart.y + (lienEnd.y - lineStart.y) * r;
  return Math.sqrt((point.x - px) * (point.x - px) + (point.y - py) * (point.y - py));
}

/**
 * 判断点是否在另一个点区域内
 * @param point {Point}
 * @param areaPoint {Point}
 * @param radius {number}
 * @param type {string}
 */
export function determineIfAPointIsWithinAnotherPointArea(
  point: Point,
  areaPoint: Point,
  radius: number = 5,
  type: string = 'round',
): boolean {
  if (type === 'round') {
    return Math.pow(point.x - areaPoint.x, 2) + Math.pow(point.y - areaPoint.y, 2) <= Math.pow(radius, 2);
  } else if (type === 'square') {
    return Math.abs(point.x - areaPoint.x) <= radius && Math.abs(point.y - areaPoint.y) <= radius;
  }
  console.warn(`type Error: in determineIfAPointIsWithinAnotherPointArea ${type}，optionalParameter round or square`);
  return false;
}

/**
 * 获取点到线的最短距离
 * @param point {Point}
 * @param lineStart {Point}
 * @param lineEnd {Point}
 */
export function getTheDistanceFromPointToLine(point: Point, lineStart: Point, lineEnd: Point): number {
  let len;
  if (lineStart.x - lineEnd.x == 0) {
    len = Math.abs(point.x - lineStart.x);
  } else {
    const A = (lineStart.y - lineEnd.y) / (lineStart.x - lineEnd.x);
    const B = lineStart.y - A * lineStart.x;
    len = Math.abs((A * point.x + B - point.y) / Math.sqrt(A * A + 1));
  }
  return len;
}

/**
 * 获取两点距离
 * @param point
 * @param point2
 */
export function getTheDistanceBetweenTwoPoints(point: Point, point2: Point): number {
  return Math.sqrt(Math.pow((point.x - point2.x), 2) + Math.pow(point.y - point2.y, 2))
}
