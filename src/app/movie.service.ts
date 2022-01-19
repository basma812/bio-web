import { Injectable } from '@angular/core';
import { moviesdesc } from './mock-movied';
import { movied } from './movied.model';

import { observable, Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private messageService: MessageService) { }

 getMovies(): Observable <movied[]> {
     this.messageService.add('MovieService: Fetched Movies')
     return of(moviesdesc);
  }

  getMovie(id: number): Observable<movied>{
    const movied = moviesdesc.find(m => m.id === id)!;
    this.messageService.add('MovieService: fetch movie id=${id}')
    return of (movied);
  }
  
}


