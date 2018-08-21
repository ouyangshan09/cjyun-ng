import { Injectable } from '@angular/core';

/**
 * 主页路由 业务逻辑服务抽象
*/
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /** 取导航列表 */
  public getNavigations (): Array<any> {
    return [];
  }

  constructor() { }
}
