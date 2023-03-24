import { Line } from './Line';
import { logger } from '../utils/debug/debug';

const log = logger.extend('Point');

interface PointInfo {
  index: number;
  data: Point;
}

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
   *  判断点是否在当前这个点的范围内
   *  Determine whether the point is within the range of the current point
   * @param point
   * @param radius
   * @param type
   */
  isPointInArea(point: Point, radius: number = 5, type: 'round' | 'square' = 'round'): boolean {
    if (type === 'round') {
      return Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2) <= Math.pow(radius, 2);
    } else if (type === 'square') {
      return Math.abs(this.x - point.x) <= radius && Math.abs(this.y - point.y) <= radius;
    }
    log(`type Error: in determineIfAPointIsWithinAnotherPointArea ${type}，optionalParameter round or square`);
    return false;
  }

  /**
   * 获取到线的距离
   * Gets the distance to the line
   * @param line
   */
  getDistanceToLine(line: Line): number {
    if (line.limited) {
      if (line.start.x === line.end.x && line.start.y === line.end.y)
        return Math.sqrt(
          (this.x - line.start.x) * (this.x - line.start.x) + (this.y - line.start.y) * (this.y - line.start.y),
        );
      const r: number =
        ((this.x - line.start.x) * (line.end.x - line.start.x) +
          (this.y - line.start.y) * (line.end.y - line.start.y)) /
        ((line.end.x - line.start.x) * (line.end.x - line.start.x) +
          (line.end.y - line.start.y) * (line.end.y - line.start.y));
      if (r <= 0)
        return Math.sqrt(
          (this.x - line.start.x) * (this.x - line.start.x) + (this.y - line.start.y) * (this.y - line.start.y),
        );
      if (r >= 1)
        return Math.sqrt((this.x - line.end.x) * (this.x - line.end.x) + (this.y - line.end.y) * (this.y - line.end.y));
      const px = line.start.x + (line.end.x - line.start.x) * r;
      const py = line.start.y + (line.end.y - line.start.y) * r;
      return Math.sqrt((this.x - px) * (this.x - px) + (this.y - py) * (this.y - py));
    } else {
      let len;
      if (line.start.x - line.end.x === 0) {
        len = Math.abs(this.x - line.start.x);
      } else {
        const A = (line.start.y - line.end.y) / (line.start.x - line.end.x);
        const B = line.start.y - A * line.start.x;
        len = Math.abs((A * this.x + B - this.y) / Math.sqrt(A * A + 1));
      }
      return len;
    }
  }

  /**
   * 获取距离最近的点
   * Gets the closest point
   * @param points
   */
  getClosestPoint(points: Point[]): PointInfo {
    let index: number = 0;
    const data: Point = new Point(points[0].x, points[0].y);
    const dif: number = this.getDistanceToPoint(points[0]);
    for (let i = 0; i < points.length; i++) {
      if (this.getDistanceToPoint(points[i]) < dif) {
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
