declare type Point = {
    x: Number;
    y: Number;
};

/**
 * 判断点是否在线上
 * @param point
 * @param lineStart
 * @param lineEnd
 */
declare function pointInLine(point: Point, lineStart: Point, lineEnd: Point): Boolean;

export { pointInLine };
