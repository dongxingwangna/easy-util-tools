import { Line } from "../modules/Line";
import { Point } from "../modules/Point";

test("LIne",()=>{
  expect(new Line(new Point(0,0),new Point(1,1)).getXAxisAngle()).toBe(45)
})

test("LIne",()=>{
  expect(new Line(new Point(0,0),new Point(-1,-1)).getXAxisAngle()).toBe(-45)
})

test("LIne",()=>{
  expect(new Line(new Point(0,0),new Point(-1,-1)).getXAxisAngle(true)).toBe(225)
})
