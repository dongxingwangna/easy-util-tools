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
    return point.type === 'Point'
  }
}
