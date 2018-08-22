import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, filter } from 'lodash';

interface Config {
  title: string;
  short_title: string;
  api: string;
  host: string;
  port: string;
  protocal?: 'http' | 'https'
}

/**
 * 主页路由 业务逻辑服务抽象
*/
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /** 取导航列表 */
  public getNavigations (): Array<Config> {
    const onself = environment.name;
    const configObj = environment.config;
    return [];
  }

  constructor() { }
}
