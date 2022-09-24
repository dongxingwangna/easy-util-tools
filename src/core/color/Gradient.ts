/**
 * @docName: Gradient.ts
 * @Author: wdx
 * @Date: 2022/9/24  14:43
 */
 import { Color } from './color';

/**
 * 渐变色
 * @param chromatogram {Color []}
 */
export class Gradient {
  private _chromatogram: Color[];

  get chromatogram(): Color[] {
    return this._chromatogram;
  }

  set chromatogram(value: Color[]) {
    this._chromatogram = value;
  }

  constructor(chromatogram: Color[] = [new Color(0, 0, 0), new Color(255, 255, 255)]) {
    this._chromatogram = chromatogram;
  }

  /**
   * 获取颜色
   * @param v
   */
  getColor(v: number): Color {
    let areaNum = this._chromatogram.length - 1;
    let areaSize = 1 / areaNum;
    if (v >= 1) {
      return this._chromatogram[areaNum];
    }
    let cIndex = Math.floor(v / (1 / areaNum));
    return this.calcColor(cIndex, (v - cIndex * areaSize) / areaSize);
  }

  /**
   * 计算颜色
   * @param cIndex
   * @param regionalProportion
   */
  calcColor(cIndex: number, regionalProportion: number): Color {
    return new Color(
      Math.round(
        this._chromatogram[cIndex].r +
          (this._chromatogram[cIndex + 1].r - this._chromatogram[cIndex].r) * regionalProportion,
      ),
      Math.round(
        this._chromatogram[cIndex].g +
          (this._chromatogram[cIndex + 1].g - this._chromatogram[cIndex].g) * regionalProportion,
      ),
      Math.round(
        this._chromatogram[cIndex].b +
          (this._chromatogram[cIndex + 1].b - this._chromatogram[cIndex].b) * regionalProportion,
      ),
    );
  }
}
