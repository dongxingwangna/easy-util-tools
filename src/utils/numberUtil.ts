/**
 * @docName: numberUtil.ts
 * @Author: wdx
 * @Date: 2023/3/24  12:34
 */

/**
 * 数值转十六进制
 * @param v
 */
export function num2hex(v: number): string {
    let r: string = v.toString(16);
    r = r.length < 2 ? (r = '0' + r) : r;
    return r;
}

/**
 * 十六进制转十进制
 * @param hex
 */
export function hex2num(hex: string): number {
    return parseInt(`0x${hex}`, undefined);
}
