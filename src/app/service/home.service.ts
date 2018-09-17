import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { omit, values } from 'lodash';
import { Config } from '../modules/config.module';
import { INCREMENT } from '../reducer/user.reducer';

interface AppState {
  count: number
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
    const navList: Array<Config> = values(omit(environment.config, [environment.name]));
    return navList;
  }

  public addNumber (): void {
    this.store.dispatch({type: INCREMENT});
  }

  constructor(
    private store: Store<AppState>
  ) { }
}
