import { Point } from './Point';
import { GetCross } from '../utils/mathUtil';

/**
 * @docName: Rectangle.ts
 * @Author: wdx
 * @Date: 2023/4/12  13:25
 */
export class Rectangle {
  private _minX: number = 0;
  private _maxX: number = 0;
  private _minY: number = 0;
  private _maxY: number = 0;

  get minX(): number {
    return this._minX;
  }

  set minX(value: number) {
    this._minX = value;
  }

  get maxX(): number {
    return this._maxX;
  }

  set maxX(value: number) {
    this._maxX = value;
  }

  get minY(): number {
    return this._minY;
  }

  set minY(value: number) {
    this._minY = value;
  }

  get maxY(): number {
    return this._maxY;
  }

  set maxY(value: number) {
    this._maxY = value;
  }

  /**
   * 传入矩形的起始点和宽度高度
   * Pass in the start point and width height of the rectangle
   * @param point
   * @param width
   * @param height
   */
  constructor(point: Point, width: number, height: number) {
    this.minX = width <= 0 ? point.x - width : point.x + width;
    this.maxX = width >= 0 ? point.x - width : point.x + width;
    this.minY = height <= 0 ? point.y - height : point.y + height;
    this.maxY = height >= 0 ? point.y - height : point.y + height;
  }

  /**
   *  判断点是否在矩形内
   * Determines whether the point is inside a rectangle
   * @param point
   */
  isPointInMatrix(point: Point): boolean {
    const p1 = new Point(this.maxX, this.maxY);
    const p2 = new Point(this.minX, this.maxY);
    const p3 = new Point(this.minX, this.minY);
    const p4 = new Point(this.maxX, this.minY);
    return (
      GetCross(p1, p2, point) * GetCross(p3, p4, point) >= 0 && GetCross(p2, p3, point) * GetCross(p4, p1, point) >= 0
    );
  }
}
