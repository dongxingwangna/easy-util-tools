/**
 * @docName: color.ts
 * @Author: wdx
 * @Date: 2022/9/24  14:42
 */

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

  constructor(r: number = 0, g: number = 0, b: number = 0) {
    this._r = r;
    this._g = g;
    this._b = b;
  }

  /**
   * 获取通道颜色
   */
  getChannelColor(): { r: number; g: number; b: number } {
    return {
      r: this.r / 255,
      g: this.g / 255,
      b: this.b / 255,
    };
  }

  /**
   * 数值转十六进制
   * @param v
   */
  num2hex(v: number): string {
    let r;
    r = v.toString(16);
    r.length < 2 ? (r = '0' + r) : r;
    return r;
  }

  /**
   * 获取十六进制颜色值
   */
  getHexColor(): string {
    let r = this.num2hex(this.r);
    let g = this.num2hex(this.g);
    let b = this.num2hex(this.b);
    return `#${r}${g}${b}`;
  }

  /**
   * 获取rgb颜色
   */
  getRgbColor(): string {
    return `rgb(${this.r} ${this.g} ${this.b})`;
  }
}
