import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Config } from '../../modules/config.module';
import { INCREMENT } from '../../reducer/user.reducer';

interface AppState {
  count: number
}

interface IUserMenu {
  id: string;
  name: string;
  icon?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logoHover: string;

  navList: Array<Config> = [];
  userMenuList: Array<IUserMenu> = [
    { id: 'user', name: '个人中心', icon: 'icon-user-config' },
    { id: 'password', name: '修改密码', icon: 'icon-user-pd' },
    { id: 'feed', name: '意见反馈', icon: 'icon-feed' },
    { id: 'help', name: '帮助中心', icon: 'icon-help' },
    { id: 'exit', name: '退出', icon: 'icon-exit' }
  ];

  constructor(
    private homeService: HomeService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.navList = this.homeService.getNavigations();
  }

  onMenu(event) {
    if (event === 'login') {
      this.store.dispatch({ type: INCREMENT });
    }
    console.log('menu event:', event);
  }
}
