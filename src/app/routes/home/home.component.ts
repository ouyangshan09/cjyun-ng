import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

interface Config {
  title: string;
  short_title: string;
  api: string;
  host: string;
  protocol: 'http' | 'https',
  needLogin: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private configs: Array<Config>;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    //
  }

}
