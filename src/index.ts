/**
 * @docName: index.ts
 * @Author: wdx
 * @Date: 2022/9/24  14:42
 */

import { Color, Gradient } from './core/color';

import {
  getTheDistanceOfAPointLineSegment,
  determineIfAPointIsWithinAnotherPointArea,
  getTheDistanceFromPointToLine,
  obtainTheAngleBetweenTwoPointsAndTheXAxis,
  getTheDistanceBetweenTwoPoints,
  getTheClosestPoint,
  gettingPointsOnACircle,
} from './core/graphic';
import { Point } from './core/graphic/Point';
import { TimeMonitoring } from './core/TimeMonitoring';

export {
  Color,
  Gradient,
  Point,
  getTheDistanceOfAPointLineSegment,
  getTheDistanceFromPointToLine,
  determineIfAPointIsWithinAnotherPointArea,
  TimeMonitoring,
  getTheDistanceBetweenTwoPoints,
  obtainTheAngleBetweenTwoPointsAndTheXAxis,
  getTheClosestPoint,
  gettingPointsOnACircle
};
