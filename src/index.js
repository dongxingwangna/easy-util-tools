/**
 * 获取点到线的距离
 * @param point
 * @param lineStart
 * @param lienEnd
 */
export function getTheDistanceOfAPointLineSegment(point, lineStart, lienEnd) {
    let r = ((point.x - lineStart.x) * (lienEnd.x - lineStart.x) + (point.y - lineStart.y) * (lienEnd.y - lineStart.y))
        / ((lienEnd.x - lineStart.x) * (lienEnd.x - lineStart.x) + (lienEnd.y - lineStart.y) * (lienEnd.y - lineStart.y));
    if (r <= 0)return Math.sqrt((point.x - lineStart.x) * (point.x - lineStart.x) + (point.y - lineStart.y) * (point.y - lineStart.y));
    if (r >= 1)return Math.sqrt((point.x - lienEnd.x) * (point.x - lienEnd.x) + (point.y - lienEnd.y) * (point.y - lienEnd.y));
    let px = lineStart.x + (lienEnd.x - lineStart.x) * r;
    let py = lineStart.y + (lienEnd.y - lineStart.y) * r;
    return Math.sqrt((point.x-px)*(point.x-px)+(point.y-py)*(point.y-py));
}
