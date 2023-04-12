/**
 * @docName: mathUtil.ts
 * @Author: wdx
 * @Date: 2023/4/12  13:50
 */
import { Point } from "../modules/Point";

export function GetCross(p1:Point, p2:Point, p: Point):number {
  return (p2.x - p1.x) * (p.y - p1.y) -(p.x - p1.x) * (p2.y - p1.y);
}
