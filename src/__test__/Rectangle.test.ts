import { Point } from "../modules/Point";
import { Rectangle } from "../modules/Rectangle";

test('IsPointInMatrix', () => {
  expect(new Rectangle(new Point(0, 0), 5, 5).IsPointInMatrix(new  Point(6, 1))).toBe(false)
});
