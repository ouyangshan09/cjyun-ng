import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from '../modules/hero';
import { HEROS } from '../mock/mock-heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  getHeros(): Observable<Array<Hero>> {
    this.messageService.add('HeroService: fetched heros');
    return of(HEROS);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero => hero.id === id));
  }

  private log (message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
}
