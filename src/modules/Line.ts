/**
 * @docName: Line.ts
 * @Author: wdx
 * @Date: 2023/3/24  23:48
 */
import { Point } from './Point';

export class Line {
  private _start: Point = new Point(0, 0);

  private _end: Point = new Point(0, 0);

  private _limited: boolean = true;

  get start(): Point {
    return this._start;
  }

  set start(value: Point) {
    this._start = value;
  }

  get end(): Point {
    return this._end;
  }

  set end(value: Point) {
    this._end = value;
  }

  get limited(): boolean {
    return this._limited;
  }

  set limited(value: boolean) {
    this._limited = value;
  }

  constructor(start: Point, end: Point, limited: boolean = true) {
    this._start = start;
    this._end = end;
    this._limited = limited;
  }

  /**
   * 获取与x轴的夹角
   * Gets the angle to the x-axis
   * @param isDirection
   */
  getXAxisAngle(isDirection: boolean = false): number {
    const dy = this.end.y - this.start.y;
    const dis = this.start.getDistanceToPoint(this.end);
    let rote = dis > 0 ? Math.round((Math.asin(dy / dis) / Math.PI) * 180) : 0;
    if (this.end.x < this.start.x && isDirection) {
      rote = 180 - rote;
    }
    return rote;
  }
}
