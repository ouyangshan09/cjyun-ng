import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modules/hero';
import { HeroService } from '../../service/hero.service';
import { RoutePath } from '../../constant/route.constant';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Array<Hero>;
  routePath = RoutePath;

  getHeros (): void {
    this.heorService.getHeros()
      .subscribe(heroes => this.heros = heroes);
    console.log('heros:', this.heros);
  }

  constructor(private heorService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

}
