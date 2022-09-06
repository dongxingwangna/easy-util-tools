/**
 * 获取点到线段的距离
 * @param point
 * @param lineStart
 * @param lienEnd
 */
 export function getTheDistanceOfAPointLineSegment(point, lineStart, lienEnd) {
    if(lineStart.x === lienEnd.x && lineStart.y === lienEnd.y) return Math.sqrt((point.x - lineStart.x) * (point.x - lineStart.x) + (point.y - lineStart.y) * (point.y - lineStart.y));
    let r = ((point.x - lineStart.x) * (lienEnd.x - lineStart.x) + (point.y - lineStart.y) * (lienEnd.y - lineStart.y))
        / ((lienEnd.x - lineStart.x) * (lienEnd.x - lineStart.x) + (lienEnd.y - lineStart.y) * (lienEnd.y - lineStart.y));
    if (r <= 0)return Math.sqrt((point.x - lineStart.x) * (point.x - lineStart.x) + (point.y - lineStart.y) * (point.y - lineStart.y));
    if (r >= 1)return Math.sqrt((point.x - lienEnd.x) * (point.x - lienEnd.x) + (point.y - lienEnd.y) * (point.y - lienEnd.y));
    let px = lineStart.x + (lienEnd.x - lineStart.x) * r;
    let py = lineStart.y + (lienEnd.y - lineStart.y) * r;
    return Math.sqrt((point.x-px)*(point.x-px)+(point.y-py)*(point.y-py));
}


/**
 * 确定一个点是否在另一个点区域内
 * @param point
 * @param areaPoint
 * @param radius
 * @param type
 * @returns {boolean}
 */
export function determineIfAPointIsWithinAnotherPointArea(point, areaPoint, radius = 5, type='round') {
   if(type === 'round'){
      return Math.pow((point.x - areaPoint.x), 2) + Math.pow((point.y - areaPoint.y), 2) <= Math.pow(radius, 2)
   } else if(type === 'square') {
      return Math.abs(point.x - areaPoint.x) <= radius && Math.abs(point.y - areaPoint.y) <= radius
   }
}

/**
 * 获取点到线的距离
 * @param point
 * @param lineStart
 * @param lineEnd
 * @returns {number}
 */
export function getTheDistanceFromPointToLine(point, lineStart, lineEnd) {
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
