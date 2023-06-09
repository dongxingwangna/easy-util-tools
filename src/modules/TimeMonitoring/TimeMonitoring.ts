/**
 * @docName: index.ts
 * @Author: wdx
 * @Date: 2022/9/26  14:59
 */
import { debounce, sum } from 'lodash';
import moment = require('moment');
import { logger } from '../../utils/debug/debug';
import { Time } from './Time';

const log = logger.extend('timeMonitoring');

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
  private _el: HTMLElement | Window | Document;
  // 事件列表
  private _listeners: string[] = ['click'];
  // 当前计时时间
  private _currentTime: number = 0;
  // 总计时间
  private _totalTime: number = 0;
  // 计时开始回调
  private _startFun: (() => void) | undefined;
  // 计时运行回调
  private _running: ((isRunning: boolean, currentSeconds: number, total: number) => void) | undefined;
  // 计时结束回调
  private _end: ((isRunning: boolean, total: number, timeLine: Time[]) => void) | undefined;
  // 计时时间线 包含一小次计时的开始时间和结束时间，总秒数
  private _timeLine: Time[] = [];
  // 自动暂停计时时间
  private _autoPauseTime: number;
  // 循环计时器指针
  private _timeOut: number = 0;
  // 每次开始计时时间
  private _startTime: moment.Moment = moment();
  // 运行状态
  private _isRunning: boolean = false;
  // 暂停状态
  private _pause: any;
  // 是否开启debugger
  private _isDebugger: boolean = false;
  // 是否手动暂停
  private _isManualPause: boolean = false;

  get el(): HTMLElement | Window | Document {
    return this._el;
  }

  set el(value: HTMLElement | Window | Document) {
    this._el = value;
  }

  get isManualPause(): boolean {
    return this._isManualPause;
  }

  set isManualPause(value: boolean) {
    this._isManualPause = value;
  }

  get isDebugger(): boolean {
    return this._isDebugger;
  }

  set isDebugger(value: boolean) {
    this._isDebugger = value;
    log.enabled = value;
  }

  get pause(): any {
    return this._pause;
  }

  set pause(value: any) {
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
    el: HTMLElement | Window | Document,
    listeners: string[],
    autoPauseTime = 6000,
    startFun?: () => void,
    running?: (isRunning: boolean, currentSeconds: number, total: number) => void,
    end?: (isRunning: boolean, total: number, timeLine: Time[]) => void,
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

  get startFun(): (() => void) | undefined {
    return this._startFun;
  }

  set startFun(value: (() => void) | undefined) {
    this._startFun = value;
  }

  get running(): ((isRunning: boolean, currentSeconds: number, total: number) => void) | undefined {
    return this._running;
  }

  set running(value: ((isRunning: boolean, currentSeconds: number, total: number) => void) | undefined) {
    this._running = value;
  }

  get end(): ((isRunning: boolean, total: number, timeLine: Time[]) => void) | undefined {
    return this._end;
  }

  set end(value: ((isRunning: boolean, total: number, timeLine: Time[]) => void) | undefined) {
    this._end = value;
  }

  get timeLine(): Time[] {
    return this._timeLine;
  }

  set timeLine(value: Time[]) {
    this._timeLine = value;
  }

  log(name: string): void {
    if (this.isDebugger) {
      const currentTime = moment();
      log(
        name,
        this.isRunning,
        this.getTotal(),
        this.startTime.format('YYYY MM DD HH:mm:ss'),
        currentTime.diff(this.startTime, 'seconds'),
      );
    }
  }

  run(): void {
    this.log('run');
    this.listeners.map((listener) => {
      this.el.addEventListener(listener, () => {
        this.start.call(this);
      });
    });
  }

  start(): void {
    if (this.isManualPause) return;
    this.log('start');
    if (!this.isRunning) {
      if (this.startFun) {
        this.startFun();
      }
      this.startTime = moment();
      if (this.running) {
        this.calcTime();
      }
      this.isRunning = true;
    }
    this.pause();
  }

  getTotal(): number {
    return sum(this.timeLine.map((time) => time.total));
  }

  calcTime(): void {
    const currentTime = moment();
    const total: number = this.getTotal();
    const currentSeconds = currentTime.diff(this.startTime, 'seconds');
    (this.running as (isRunning: boolean, currentSeconds: number, total: number) => void)(
      this.isRunning,
      currentSeconds,
      total + currentSeconds,
    );
    this.timeOut = Number(setTimeout(this.calcTime.bind(this), 1000));
    this.log('calcTime');
  }

  stop(): void {
    if (this.running) {
      clearTimeout(this.timeOut);
    }
    const currentTime = moment();
    this.timeLine.push(
      new Time(
        this.startTime.format('YYYY MM DD HH:mm:ss'),
        currentTime.format('YYYY MM DD HH:mm:ss'),
        currentTime.diff(this.startTime, 'seconds'),
      ),
    );
    this.isRunning = false;
    if (this.end) {
      const total: number = this.getTotal();
      this.end(this.isRunning, total, this.timeLine);
    }
    this.log('stop');
  }

  getTime(autoDestroy: boolean = false): {
    total: number;
    timeLine: Time[];
  } {
    let total: number = this.getTotal();
    if (autoDestroy) {
      this.destroy();
    }
    if (this.isRunning) {
      const currentTime = moment();
      total += currentTime.diff(this.startTime, 'seconds');
    }
    this.log('getTime');
    return {
      total,
      timeLine: this.timeLine,
    };
  }

  reset(): void {
    this.startTime = moment();
    this.timeLine = [];
    if (!this.isRunning) {
      this.continue();
    } else {
      this.pause();
    }
    this.log('reset');
  }

  wait(): void {
    if (this.running) {
      clearTimeout(this.timeOut);
      const currentTime = moment();
      const total: number = this.getTotal();
      const currentSeconds = this.isRunning ? currentTime.diff(this.startTime, 'seconds') : 0;
      this.running(this.isRunning, 0, total + currentSeconds);
    }
    if (this.isRunning) {
      this.pause.cancel();
      this.stop();
      this.isRunning = false;
    }
    this.isManualPause = true;
    this.log('wait');
  }

  continue(): void {
    this.isManualPause = false;
    this.start();
    this.log('continue');
  }

  destroy(): void {
    clearTimeout(this.timeOut);
    this.listeners.map((listener) => {
      this.el.removeEventListener(listener, this.start);
    });
    this.log('destroy');
  }
}
