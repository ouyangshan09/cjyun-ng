import { Component, OnInit } from '@angular/core';
import { Hero } from '../../modules/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heros: Array<Hero>;
  selectedHero: Hero;

  getHeros (): void {
    this.heorService.getHeros()
      .subscribe(heroes => this.heros = heroes);
    console.log('heros:', this.heros);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('hero:', hero);
  }

  constructor(private heorService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

}
