import { CommonObject } from '../types/common';
import { stringify } from 'query-string';

export class UtilsApi {
  public static getMainApiUrl(endpoint: string, params?: CommonObject): string {
    const paramsStr = stringify(params || {});
    console.log(paramsStr, 'paramsStr')
    return `${process.env.API_URL}/${endpoint}?key=${process.env.API_KEY}&${paramsStr}`;
  }
}
