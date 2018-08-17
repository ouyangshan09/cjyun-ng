import { Component } from '@angular/core';
import { RoutePath } from './constant/route.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cjyun-ng2';
  public RoutePath = RoutePath;
}
