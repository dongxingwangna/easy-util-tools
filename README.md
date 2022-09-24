# graphictools

#### 介绍
图形工具


#### 安装方法
~~~
npm install --save graphictools
~~~
#### 使用说明

##### 类

###### Color 
~~~
// 导入模块
import { Color } from graphictools

//实例化类
let color = new Color(r:number, g:number, b: number)

//获取十六进制颜色值 返回值为 #000000 - #ffffff
let hexColor = color.getHexColor()

//获取rbg颜色值 返回值为 string rgb(0 0 0)
let rgbColor = color.getRgbColor()

//获取通道颜色 返回值为对象 {r: number, g: number, b: number}
let channelColor = color.getChannelColor()

//将十六进制颜色值读取到实例 参数可以是十六进制也可以是十六进制字符串 '#ffffff' 或者'0xffffff'
color.readHexColor('#ffffff')

// 将rgb值读取到实例 参数依次为r g b 值大小为0-255
color.readRgbColor(0, 0, 0)

//将通道颜色读取到实例 参数依次为r g b 取值 0-1
color.readChannelColor(0, 0, 0)

~~~

###### Gradient
这个类可以自定义一个色谱，然后获取色谱上的某一点的颜色返回值是 实例化的Color 具体方法请参照上述Color类
~~~
//导入模块
import { Gradient } from graphictool

//实例化类 参数是一个Color类实例数组
let gradient = new Gradient([
    new Color(0, 0, 0),
    new Color(255, 255, 255)
])

//获取色谱颜色值 参数取值区间是0-1之间的小数
let color = grandient.getColor(v)

//实例重设色谱
gradient.chromatogram = Color[]
~~~

###### Point
~~~
//导入类
import { Point } from 'graphictool'

//实例化类 参数为一个二维坐标 x, y
let point = new Point(0, 0)
~~~

##### 方法

###### getTheDistanceOfAPointLineSegment 获取点到线段的距离
~~~
//导入方法
import { Point, getTheDistanceOfAPointLineSegment } from 'graphictool'

//获取距离 参数依次为点，线段点1， 线段点2 返回值为number
let distance = getTheDistanceOfAPointLineSegment(point：Point,  lineStart: Point, lineEnd: Point)
~~~

###### getTheDistanceFromPointToLine 获取点到线的距离最近距离
~~~
//导入方法
import { Point, getTheDistanceFromPointToLine } from 'graphictool'

//获取距离 参数依次为点，线段点1， 线段点2 返回值为 number
let distance = getTheDistanceFromPointToLine(point：Point,  lineStart: Point, lineEnd: Point)
~~~

###### determineIfAPointIsWithinAnotherPointArea 判断一个点是否在一个点一定大小区域内
~~~
//导入方法
import { Point, determineIfAPointIsWithinAnotherPointArea } from 'graphictool'

//判断点是否在另一个点区域内 参数依次为点，区域点， 范围 number 默认值5，检测类型 string 默认值 round 可选square，返回值为 boolean
let isArea = determineIfAPointIsWithinAnotherPointArea(point：Point,  areaPoint: Point, radius: number, type: string)
~~~


