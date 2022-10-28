/**
 * @docName: index.ts
 * @Author: wdx
 * @Date: 2022/9/24  14:41
 */

import { Point } from './Point';
import { PointInfo } from "./PointInfo";

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
  return Math.sqrt(Math.pow(point.x - point2.x, 2) + Math.pow(point.y - point2.y, 2));
}

/**
 * 获取两点与x轴夹角
 * @param point
 * @param point2
 * @param isDirection 是否判断方向
 */
export function obtainTheAngleBetweenTwoPointsAndTheXAxis(
  point: Point,
  point2: Point,
  isDirection: boolean = false,
): number {
  let dy = point2.y - point.y;
  let dis = getTheDistanceBetweenTwoPoints(point, point2);
  let rote = dis > 0 ? Math.round((Math.asin(dy / dis) / Math.PI) * 180) : 0;
  if (point2.x < point.x && isDirection) {
    rote = 180 - rote;
  }
  return rote;
}

/**
 * 获取距离最近的点
 * @param point
 * @param points
 */
export function getTheClosestPoint(point: Point, points: Point[]): PointInfo {
  let index:number = 0;
  let data: Point = new Point(0, 0);
  let dif: number = 0;
  for (let i = 0; i < points.length; i++) {
    if(getTheDistanceBetweenTwoPoints(point, points[i])<dif){
      index = i;
      data.x = points[i].x
      data.y = points[i].y
    }
  }
  return {
    index,
    data
  }
}
