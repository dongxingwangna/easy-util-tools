/**
 * @docName: index.ts
 * @Author: wdx
 * @Date: 2022/9/26  14:59
 */
import { debounce, sum } from 'lodash';
import moment = require('moment');

class time {
  // 开始时间
  private _startTime: string;
  // 结束时间
  private _endTime: string;
  // 总计时间 秒
  private _total: number;

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get startTime(): string {
    return this._startTime;
  }

  set startTime(value: string) {
    this._startTime = value;
  }

  get endTime(): string {
    return this._endTime;
  }

  set endTime(value: string) {
    this._endTime = value;
  }

  constructor(startTime: string, endTime: string, total: number) {
    this._startTime = startTime;
    this._endTime = endTime;
    this._total = total;
  }
}

/**
 * 计时类统计页面操作时间
 * @param el
 * @param listeners
 * @param autoPauseTime
 * @param startFun
 * @param running
 * @param end
 */
export class TimeMonitoring {
  // 监听事件元素
  private _el: HTMLElement;
  // 事件列表
  private _listeners: string[] = ['click'];
  // 当前计时时间
  private _currentTime: number = 0;
  // 总计时间
  private _totalTime: number = 0;
  // 计时开始回调
  private _startFun: Function;
  // 计时运行回调
  private _running: Function;
  // 计时结束回调
  private _end: Function;
  // 计时时间线 包含一小次计时的开始时间和结束时间，总秒数
  private _timeLine: time[] = [];
  // 自动暂停计时时间
  private _autoPauseTime: number;
  // 循环计时器指针
  private _timeOut: number = 0;
  // 每次开始计时时间
  private _startTime: moment.Moment = moment();
  // 运行状态
  private _isRunning: boolean = false;
  private _pause: Function;

  get pause(): Function {
    return this._pause;
  }

  set pause(value: Function) {
    this._pause = value;
  }

  get isRunning(): boolean {
    return this._isRunning;
  }

  set isRunning(value: boolean) {
    this._isRunning = value;
  }

  get startTime(): moment.Moment {
    return this._startTime;
  }

  set startTime(value: moment.Moment) {
    this._startTime = value;
  }

  get timeOut(): number {
    return this._timeOut;
  }

  set timeOut(value: number) {
    this._timeOut = value;
  }

  constructor(
    el: HTMLElement,
    listeners: string[],
    autoPauseTime = 6000,
    startFun: Function,
    running: Function,
    end: Function,
  ) {
    this._el = el;
    this._listeners = listeners;
    this._startFun = startFun;
    this._running = running;
    this._autoPauseTime = autoPauseTime;
    this._end = end;
    this._pause = debounce(this.stop, this.autoPauseTime, {
      leading: false,
      trailing: true,
    });
  }

  get el(): HTMLElement {
    return this._el;
  }

  set el(value: HTMLElement) {
    this._el = value;
  }

  get autoPauseTime(): number {
    return this._autoPauseTime;
  }

  set autoPauseTime(value: number) {
    this._autoPauseTime = value;
  }

  get listeners(): string[] {
    return this._listeners;
  }

  set listeners(value: string[]) {
    this._listeners = value;
  }

  get currentTime(): number {
    return this._currentTime;
  }

  set currentTime(value: number) {
    this._currentTime = value;
  }

  get totalTime(): number {
    return this._totalTime;
  }

  set totalTime(value: number) {
    this._totalTime = value;
  }

  get startFun(): Function {
    return this._startFun;
  }

  set startFun(value: Function) {
    this._startFun = value;
  }

  get running(): Function {
    return this._running;
  }

  set running(value: Function) {
    this._running = value;
  }

  get end(): Function {
    return this._end;
  }

  set end(value: Function) {
    this._end = value;
  }

  get timeLine(): time[] {
    return this._timeLine;
  }

  set timeLine(value: time[]) {
    this._timeLine = value;
  }

  run() {
    this.listeners.map((listener) => {
      this.el.addEventListener(listener, () => {
        this.start.call(this);
      });
    });
  }

  start() {
    if (!this.isRunning) {
      this.startFun && this.startFun();
      this.startTime = moment();
      this.calcTime();
    }
    this.pause();
  }

  calcTime() {
    let currentTime = moment();
    if (!this.isRunning) {
      this.isRunning = true;
    }
    if (this.running) {
      let total = sum(this.timeLine.map((time) => time.total));
      let currentSeconds = currentTime.diff(this.startTime, 'seconds');
      this.running(this.isRunning, currentSeconds, total + currentSeconds);
      this.timeOut = Number(setTimeout(this.calcTime.bind(this), 1000));
    }
  }

  stop() {
    clearTimeout(this.timeOut);
    let currentTime = moment();
    this.timeLine.push(
      new time(
        this.startTime.format('YYYY MM DD HH:mm:ss'),
        currentTime.format('YYYY MM DD HH:mm:ss'),
        currentTime.diff(this.startTime, 'seconds'),
      ),
    );
    this.isRunning = false;
    if (this.end) {
      let total = sum(this.timeLine.map((time) => time.total));
      this.end(this.isRunning, total, this.timeLine);
    }
  }

  getTime(autoDestroy: boolean = false): {
    total: number;
    timeLine: time[];
  } {
    let currentTime = moment();
    let total = sum(this.timeLine.map((time) => time.total));
    if (autoDestroy) {
      this.destroy();
    }
    return {
      total: this.isRunning ? total + currentTime.diff(this.startTime, 'seconds') : total,
      timeLine: this.timeLine,
    };
  }

  reset() {
    this.startTime = moment();
    this.timeLine = [];
    if (!this.isRunning) {
      this.continue();
    } else {
      this.pause();
    }
  }

  wait() {
    clearTimeout(this.timeOut);
    let currentTime = moment();
    if (this.running) {
      let total = sum(this.timeLine.map((time) => time.total));
      let currentSeconds = currentTime.diff(this.startTime, 'seconds');
      this.running(this.isRunning, 0, total + currentSeconds);
    }
    this.timeLine.push(
      new time(
        this.startTime.format('YYYY MM DD HH:mm:ss'),
        currentTime.format('YYYY MM DD HH:mm:ss'),
        currentTime.diff(this.startTime, 'seconds'),
      ),
    );
    this.isRunning = false;
  }

  continue() {
    this.startTime = moment();
    this.calcTime();
    this.isRunning = true;
    this.pause();
  }

  destroy(): void {
    clearTimeout(this.timeOut);
    this.listeners.map((listener) => {
      this.el.removeEventListener(listener, this.start);
    });
  }
}
