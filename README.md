# graphictools

#### 介绍
图形工具


#### 安装方法
~~~
npm install --save graphictools
~~~
#### 使用说明
使用npm version patch,minor,major版本管理

使用npm run test 运行测试文件

使用npm publish 发布版本

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

###### TimeMonitoring
~~~
//导入类
import { TimeMonitoring } from 'graphictool'

//实例化类 参数依次为统计操作时间的元素，操作的事件列表, 自动暂停统计的延时, 计时开始的回调，计时运行的回调，计时结束的回调
let timeMonitoring = new TimeMonitoring(el, listeners: string[], autoPauseTime, startFun, running, end)

//参数函数说明：
startFun()//该方法在计时开始前执行，没有参数

running(isRunning, currentSeconds, total) //该方法在计时过程中执行，参数依次为运行状态，本次计时时间，总计时间

end(isRunning, total, timeLine) //该方法在计时结束后执行，参数依次为运行状态，总计时间，计时时间线

//开始计时
timeMonitoring.run()

//获取时间 入参为autoDestroy true or false 表示是否自动销毁默认值为false 如果为true 在返回时间后组件事件和计时器将被销毁, 返回值为对象包含 total, timeLIne
timeMonitoring.getTime()

//销毁实例事件监听，及计时器, 该方法没有返回值
timeMonitoring.destroy()
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

###### getTheDistanceBetweenTwoPoints 获取两点向量
~~~
//导入方法
import { Point, getTheDistanceBetweenTwoPoints } from 'graphictool'

//获取两点之间的向量，返回值为 number
let vector = getTheDistanceBetweenTwoPoints(point：Point,  point2: Point)
~~~

###### getTheDistanceBetweenTwoPoints 获取两点与X轴的夹角
~~~
//导入方法
import { Point, obtainTheAngleBetweenTwoPointsAndTheXAxis } from 'graphictool'

//获取两点之间的向量，返回值为 number
let angle = obtainTheAngleBetweenTwoPointsAndTheXAxis(point：Point,  point2: Point, isDirection: boolean)
~~~

###### getTheClosestPoint 获取与点最近的点
~~~
//导入方法
import { Point, getTheClosestPoint } from 'graphictool'

//获取与点最近的点，返回值为 { index: number, point: Point }
let PointInfo = getTheClosestPoint(point：Point,  points: Point[])
~~~



