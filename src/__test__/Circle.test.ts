import { Circle } from "../modules/Circle";
import { Point } from "../modules/Point";

test("Circle",()=>{
  expect(new Circle(new Point(1, 0),5).getPointOnCircle(0)).toEqual(new Point(6,0))
})

test("Circle",()=>{
  expect(new Circle(new Point(1, 0),5).getPointOnCircle(90)).toEqual(new Point(1,5))
})

test("Circle",()=>{
  expect(new Circle(new Point(1, 0),5).getPointOnCircle(90,"top")).toEqual(new Point(-4,0))
})

test("Circle",()=>{
  expect(new Circle(new Point(1, 0),5).getPointOnCircle(90,"top",true)).toEqual(new Point(6,0))
})
