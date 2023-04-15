/**
 * @docName: dom.ts
 * @Author: wdx
 * @Date: 2023/4/15  14:34
 */
import {Point} from "../../Point";

/**
 * 获取鼠标在元素中的标准坐标
 * Gets the standard coordinates of the mouse in the element
 * @param eve
 * @param el
 */
export function getStandardCoordinate(eve:MouseEvent, el:HTMLElement):Point {
  const domRect = el.getBoundingClientRect();
  const x = (eve.clientX / domRect.width) * 2 - 1;
  const y = (-eve.clientY / domRect.height) * 2 + 1;
  return new Point(x, y)
}



