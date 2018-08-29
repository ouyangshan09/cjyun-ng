import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Config } from '../../modules/config.module';
import { NzMenuItemDirective } from 'ng-zorro-antd';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logoHover: string;

  navList: Array<Config> = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.navList = this.homeService.getNavigations();
  }

  onMenu(event) {
    console.log('menu event:', event);
  }
}
