import { Point } from "../modules/Point";
import { Line } from "../modules/Line";

test('getDistanceToPoint',()=>{
  expect(new Point(0, 0).getDistanceToPoint(new Point(1, 0))).toBe(1)
})

test('getDistanceToLine',()=>{
  expect(new Point(0, 1).getDistanceToLine(new Line(new Point(0, 0),new Point(3, 0)))).toBe(1)
})

test('getDistanceToLine',()=>{
  expect(new Point(0, 1).getDistanceToLine(new Line(new Point(1, 0),new Point(3, 0),  false))).toBe(1)
})

test('isPointInArea',()=>{
  expect(new Point(0, 0).isPointInArea(new Point(0,5),5)).toBe(true)
})

test('isPointInArea',()=>{
  expect(new Point(0, 0).isPointInArea(new Point(5,5),5,"square")).toBe(true)
})

test('getClosestPoint', ()=>{
  expect(new Point(0, 0).getClosestPoint([
    new Point(4,5),
    new Point(1,1),
    new Point(0, 0.2)
  ])).toEqual({index: 2, data:new Point(0, 0.2)})
})
