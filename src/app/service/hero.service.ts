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

  constructor(private messageService: MessageService ) { }
}
