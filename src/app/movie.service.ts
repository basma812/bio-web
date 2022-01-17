import { Injectable } from '@angular/core';
import { moviesdesc } from './mock-movied';
import { movied } from './movied.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

 getMovies(): movied[] {
     
     return  moviesdesc;
  }
}


