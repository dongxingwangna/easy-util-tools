import { getTheDistanceBetweenTwoPoints } from './index';
import { PointInfo } from './PointInfo';

/**
 * @docName: Point.ts
 * @Author: wdx
 * @Date: 2022/9/24  14:42
 */
export class Point {
  private _x: number;
  private _y: number;
  private _type: string = 'Point';

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get type(): string {
    return this._type;
  }

  static isPoint(point: Point): boolean {
    return point.type === 'Point';
  }

  /**
   * 获取到点的距离
   * Gets the distance to the point
   * @param point
   */
  getDistanceToPoint(point: Point): number {
    return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
  }

  /**
   * 获取距离最近的点
   * Gets the closest point
   * @param points
   */
  getClosestPoint(points: Point[]): PointInfo {
    let index: number = 0;
    const data: Point = new Point(points[0].x, points[0].y);
    const dif: number = getTheDistanceBetweenTwoPoints(this, points[0]);
    for (let i = 0; i < points.length; i++) {
      if (getTheDistanceBetweenTwoPoints(this, points[i]) < dif) {
        index = i;
        data.x = points[i].x;
        data.y = points[i].y;
      }
    }
    return {
      index,
      data,
    };
  }
}
