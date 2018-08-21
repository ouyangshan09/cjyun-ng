import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

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

  constructor() { }

  ngOnInit() {
    console.log('environment:', environment);
  }

}
