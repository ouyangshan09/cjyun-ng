import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Config } from '../../modules/config.module';


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
    console.log('this.navList:', this.navList);
  }

}
