#easy_utils

## 介绍
图形工具

## 安装方法
~~~ bash
npm install --save easy_utils
~~~

## 使用说明

### 类

#### Color
~~~ javascript
// 导入模块
import { Color } from 'easy_utils'

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

#### Gradient
这个类可以自定义一个色谱，然后获取色谱上的某一点的颜色返回值是 实例化的Color 具体方法请参照上述Color类
~~~ javascript
//导入模块
import { Gradient } from 'easy_utils'

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

#### Point
~~~ javascript
//导入类
import { Point } from 'easy_utils'

//实例化类 参数为一个二维坐标 x, y
let point = new Point(0, 0)
~~~

#### TimeMonitoring
~~~ javascript
//导入类
import { TimeMonitoring } from 'easy_utils'

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

### 方法

#### getTheDistanceOfAPointLineSegment 获取点到线段的距离
|    参数     |  类型   | 是否必要 |   说明   | 默认值 | 可选项 |
|:---------:|:-----:|:----:|:------:|:---:|:---:|
|   point   | Point | true |  判断的点  |  -  |  -  |
| lineStart | Point | true | 线段的开始点 |  -  |  -  |
|  lineEnd  | Point | true | 线段的结束点 |  -  |  -  |
~~~ javascript
//导入方法
import { Point, getTheDistanceOfAPointLineSegment } from 'easy_utils'

//返回值为number
let distance: number = getTheDistanceOfAPointLineSegment(point：Point,  lineStart: Point, lineEnd: Point)
~~~

#### getTheDistanceFromPointToLine 获取点到线的距离最近距离
|    参数     |  类型   | 是否必要 |  说明   | 默认值 | 可选项 |
|:---------:|:-----:|:----:|:-----:|:---:|:---:|
|   point   | Point | true | 判断的点  |  -  |  -  |
| lineStart | Point | true | 线的开始点 |  -  |  -  |
|  lineEnd  | Point | true | 线的结束点 |  -  |  -  |

~~~ javascript
//导入方法
import { Point, getTheDistanceFromPointToLine } from 'easy_utils'

//返回值为 number
let distance:number = getTheDistanceFromPointToLine(point：Point,  lineStart: Point, lineEnd: Point)
~~~

#### determineIfAPointIsWithinAnotherPointArea 判断一个点是否在一个点一定大小区域内
|    参数     |   类型   | 是否必要  |   说明    |  默认值  |  可选项   |
|:---------:|:------:|:-----:|:-------:|:-----:|:------:|
|   point   | Point  | true  |  判断的点   |   -   |   -    |
| areaPoint | Point  | true  |   区域点   |   -   |   -    |
|  radius   | number | true  |  区域大小   |   -   |   -    |
|   type    | string | false | 检测的区域类型 | round | square |

~~~ javascript
//导入方法
import { Point, determineIfAPointIsWithinAnotherPointArea } from 'easy_utils'

//判返回值为 boolean
let isArea:boolean = determineIfAPointIsWithinAnotherPointArea(point：Point,  areaPoint: Point, radius: number, type: string)
~~~

#### getTheDistanceBetweenTwoPoints 获取两点距离
|   参数   |   类型   | 是否必要  |  说明  |  默认值  |  可选项   |
|:------:|:------:|:-----:|:----:|:-----:|:------:|
| point  | Point  | true  | 第一个点 |   -   |   -    |
| point2 | Point  | true  | 第二个点 |   -   |   -    |

~~~ javascript
//导入方法
import { Point, getTheDistanceBetweenTwoPoints } from 'easyUtils.js'

//返回值为 number
let distance:number = getTheDistanceBetweenTwoPoints(point：Point,  point2: Point)
~~~

#### getTheDistanceBetweenTwoPoints 获取两点与X轴的夹角

|     参数      |   类型    | 是否必要  |   说明   |  默认值  | 可选项  |
|:-----------:|:-------:|:-----:|:------:|:-----:|:----:|
|    point    |  Point  | true  |  第一个点  |   -   |  -   |
|   point2    |  Point  | true  |  第二个点  |   -   |  -   |
| isDirection | boolean | false | 是否方向判断 | false | true |

~~~ javascript
//导入方法
import { Point, obtainTheAngleBetweenTwoPointsAndTheXAxis } from 'easyUtils.js'

//返回值为 number
let angle: number = obtainTheAngleBetweenTwoPointsAndTheXAxis(point：Point,  point2: Point, isDirection: boolean)
~~~

###### getTheClosestPoint 获取与点最近的点

|   参数   |   类型    | 是否必要 |  说明   | 默认值 | 可选项 |
|:------:|:-------:|:----:|:-----:|:---:|:---:|
| point  |  Point  | true |  参考点  |  -  |  -  |
| points | Point[] | true | 要判断的点 |  -  |  -  |

~~~ javascript
//导入方法
import { Point, getTheClosestPoint } from 'easyUtils.js'

//返回值为 { index: number, point: Point }
let PointInfo = getTheClosestPoint(point：Point,  points: Point[])
~~~

#### gettingPointsOnACircle 获取圆上的点
|        参数        |   类型    |  是否必要   |     说明      |   默认值   |        可选项        |
|:----------------:|:-------:|:-------:|:-----------:|:-------:|:-----------------:|
|      point       |  Point  |  true   |    圆的中心点    |    -    |         -         |
|      angle       | number  |  true   |  要计算圆上点的角度  |    -    |         -         |
|        r         | number  |  true   |    圆的半径     |    -    |         -         |
|  startDirection  | string  |  false  |    开始方向     |  right  | left, top, bottom |
|  clockwiseOrNot  | boolean |  false  |   是否顺时针计算   |  false  |       true        |

~~~ javascript
//导入方法
import { Point, gettingPointsOnACircle } from 'easyUtils.js'

//返回值为 point:Point,
let PointInfo = gettingPointsOnACircle(point：Point, angle: number , r: number, startDirection: string, clockwiseOrNot: boolean)
~~~

#### judgeWhetherThePointIsOnline 判断点是否在线的节点上
|   参数   |   类型    | 是否必要  |  说明   |  默认值  |  可选项   |
|:------:|:-------:|:-----:|:-----:|:-----:|:------:|
| point  |  Point  | true  | 要判断的点 |   -   |   -    |
| points | Point[] | true  | 线上的节点 |   -   |   -    |
| radius | number  | false | 误差半径  |   5   |   -    |
|  type  | string  | false |  类型   | round | square |

~~~ javascript
//导入方法
import { Point, judgeWhetherThePointIsOnline } from 'easyUtils.js'

//返回值为 info{status: number, index: number, data: Point},
let PointInfo = judgeWhetherThePointIsOnline(point：Point, points: Point[] , radius: number, type: string)
~~~
