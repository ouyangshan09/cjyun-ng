import { Store } from '@ngrx/store';
import { StoreDevtools } from '@ngrx/store-devtools';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Config } from '../../modules/config.module';
import { INCREMENT } from '../../reducer/user.reducer';

interface AppState {
  count: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logoHover: string;

  navList: Array<Config> = [];

  constructor(
    private homeService: HomeService,
    private store: Store<AppState>,
    private devtools: StoreDevtools
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
