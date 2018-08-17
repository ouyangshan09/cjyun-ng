import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../modules/hero';
import { HEROS } from '../mock/mock-heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeros(): Observable<Array<Hero>> {
    this.messageService.add('HeroService: fetched heros');
    return of(HEROS);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService ) { }
}
