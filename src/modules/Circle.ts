/**
 * @docName: Circle.ts
 * @Author: wdx
 * @Date: 2023/3/25  01:28
 */
import { Point } from './Point';
export class Circle {
  private _center: Point;
  private _radius: number;

  get center(): Point {
    return this._center;
  }

  set center(value: Point) {
    this._center = value;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }

  constructor(center: Point, radius: number) {
    this._center = center;
    this._radius = radius;
  }

  /**
   * 获取圆上的点
   * Gets the point on the circle
   * @param angle 点所在的角度 The angle at which the point is located
   * @param startDirection 起始方向 Start direction
   * @param clockwiseOrNot 是否为顺时针 Whether it is clockwise
   */
  getPointOnCircle(
    angle: number,
    startDirection: 'top' | 'right' | 'bottom' | 'left' = 'right',
    clockwiseOrNot: boolean = false,
  ): Point {
    switch (startDirection) {
      case 'top':
        angle += 90;
        break;
      case 'left':
        angle += 180;
        break;
      case 'bottom':
        angle += 270;
        break;
      default:
        angle += 0;
    }
    const radian = ((2 * Math.PI) / 360) * angle;
    let directionX = Math.cos(radian);
    let directionY = Math.sin(radian);
    if (clockwiseOrNot) {
      directionX *= -1;
      directionY *= -1;
    }
    return new Point(
      this.center.x + Number((directionX * this.radius).toFixed(2)),
      this.center.y + Number((directionY * this.radius).toFixed(2)),
    );
  }
}
