/**
 * 获取点到线的距离
 * @param point
 * @param lineStart
 * @param lienEnd
 */
function getTheDistanceOfAPointLineSegment(point, lineStart, lienEnd) {
    const r = ((point.x - lineStart.x) * (lienEnd.x - lineStart.x) + (point.y - lineStart.y) * (lienEnd.y - lineStart.y))
        / ((lienEnd.x - lineStart.x) * (lienEnd.x - lineStart.x) + (lienEnd.y - lineStart.y) * (lienEnd.y - lineStart.y));
    if (r <= 0)
        return Math.sqrt((point.x - lineStart.x) * (point.x - lineStart.x) + (point.y - lineStart.y) * (point.y - lineStart.y));
    if (r >= 1)
        return Math.sqrt((point.x - lienEnd.x) * (point.x - lienEnd.x) + (point.y - lienEnd.y) * (point.y - lienEnd.y));
    const px = lineStart.x + (lienEnd.x - lineStart.x) * r;
    const py = lineStart.y + (lienEnd.y - lineStart.y) * r;
    return Math.sqrt((point.x - px) * (point.x - px) + (point.y - py) * (point.y - py));
}

export { getTheDistanceOfAPointLineSegment };
