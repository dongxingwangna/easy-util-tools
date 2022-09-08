# graphicTools

#### 介绍
空间图形工具

#### 软件架构
软件架构说明


#### 安装教程

1.  npm install graphictools

#### 方法说明
引入方法import { function } from "graphictools"
1. getTheDistanceOfAPointLineSegment
    info:获取点到线段的距离，如果要获得点到线的距离请使用下面的方法 
    fun: getTheDistanceOfAPointLineSegment(point, lineStart, lineEnd) 
    point: 点 {x: number, y: number}
    lineStart & lineEnd: 线段的点 {x: number, y: number}
    return: 一个点到线段的距离的正数

2. getTheDistanceFromPointToLine
   info: 获取点到线的距离
   fun: getTheDistanceFromPointToLine(point, lineStart, lineEnd)
   point: 点 {x: number, y: number}
   lineStart & lineEnd: 线段的点 {x: number, y: number}
   return: 一个点到线的距离的正数

3.determineIfAPointIsWithinAnotherPointArea
    info:  判断一个点是否在另一个点的范围内
    fun: determineIfAPointIsWithinAnotherPointArea(point, areaPoint, radius, type)
    point: 点 {x: number, y: number}
    areaPoint: {x: number, y: number} 区域点
    radius: 半径 number default: 5
    type: 判断类型 string default: 'round' optional: 'square'
    return: 是否在区域内的一个布尔值 true or false

