import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modules/hero';
import { HeroService } from '../../service/hero.service';
import { RoutePath } from '../../constant/route.constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  routePath = RoutePath;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
