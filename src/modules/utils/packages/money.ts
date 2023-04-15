/**
 * @docName: money.ts
 * @Author: wdx
 * @Date: 2023/4/15  14:34
 */

import { isNumber } from 'lodash';
import { logger } from '../../../utils/debug/debug';

const log = logger.extend('money');
/**
 * 格式化金额
 * Format the amount
 * @param data
 * @param formatSymbols
 */
export function formatAmount(data: number, formatSymbols: string = ','): string {
  if (!isNumber(data)) {
    log('An error occurred in format Amount, the parameter should be a numeric type');
    return '00.00';
  }
  const v: string[] = data.toString().split('.');
  // \B 匹配非单词边界，两边都是单词字符或者两边都是非单词字符
  v[0] = v[0].replace(/\B(?=(\d{3})+(?!\d))/g, formatSymbols);
  // 数组转字符串
  return v.join('.');
}
