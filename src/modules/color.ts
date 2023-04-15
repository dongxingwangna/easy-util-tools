/**
 * @docName: color.ts
 * @Author: wdx
 * @Date: 2022/9/24  14:42
 */

import { logger } from '../utils/debug/debug';
import { hex2num, num2hex } from '../utils/numberUtil';

const log = logger.extend('color');

/**
 * 颜色
 * @param r {number} 0-255
 * @param g {number} 0-255
 * @param b {number} 0-255
 */
export class Color {
  private _r: number;
  private _g: number;
  private _b: number;

  get r(): number {
    return this._r;
  }

  set r(value: number) {
    this._r = value;
  }

  get g(): number {
    return this._g;
  }

  set g(value: number) {
    this._g = value;
  }

  get b(): number {
    return this._b;
  }

  set b(value: number) {
    this._b = value;
  }

  /**
   * 通道颜色，这个属性新增于1.0.3版本，这个属性只读
   * Channel color, this property was added in version 1.0.3, this property is read-only
   */
  get channel(): { r: number; g: number; b: number } {
    return {
      r: this.r / 255,
      g: this.g / 255,
      b: this.b / 255,
    };
  }

  /**
   * 十六进制颜色值，这个属性新增于1.0.3版本，这个属性只读
   * Hexadecimal color value, this property was added in version 1.0.3, this property is read-only
   */
  get hex(): string {
    const r = num2hex(this.r);
    const g = num2hex(this.g);
    const b = num2hex(this.b);
    return `#${r}${g}${b}`;
  }

  /**
   * rgb颜色，这个属性新增于1.0.3版本，这个属性只读
   * rgb color, this attribute has been added in version 1.0.3, this property is read-only
   */
  get rgb(): string {
    return `rgb(${this.r} ${this.g} ${this.b})`;
  }

  constructor(r: number = 0, g: number = 0, b: number = 0) {
    this._r = r;
    this._g = g;
    this._b = b;
  }

  /**
   * 读取十六进制颜色
   * @param hexColor {string} #000000-#ffffff 0x000000-0xffffff
   */
  readHexColor(hexColor: string): Color {
    const reg = new RegExp('^(#|0x)([A-z|0-9]{6})$');
    if (reg.test(hexColor)) {
      try {
        const color = hexColor.replace(reg, `$2`);
        this.r = hex2num(`${color[0] + color[1]}`);
        this.g = hex2num(`${color[2] + color[3]}`);
        this.b = hex2num(`${color[4] + color[5]}`);
        return this;
      } catch (e) {
        log('failedToParseValue', e);
      }
    } else {
      log('Failed to read color, please set correct hex color value');
    }
    return this;
  }

  /**
   * 读取通道颜色值
   * @param r {number} 0-1
   * @param g {number} 0-1
   * @param b {number} 0-1
   */
  readChannelColor(r: number, g: number, b: number): Color {
    this.r = r ? r * 255 : 0;
    this.g = g ? g * 255 : 0;
    this.b = b ? b * 255 : 0;
    return this;
  }

  /**
   * 读取rgb颜色
   * @param r {number} 0- 255
   * @param g {number} 0-255
   * @param b {number} 0-255
   */
  readRgbColor(r: number, g: number, b: number): Color {
    this.r = r ? r : 0;
    this.g = g ? g : 0;
    this.b = b ? b : 0;
    return this;
  }
}
