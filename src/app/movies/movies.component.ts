import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { movied } from '../movied.model';
import {moviesdesc} from '../mock-movied'
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selectedMovie?: movied;

  M: movied[] = [];

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies()
     .subscribe(M => this.M = M);
  }

  onSelect(M: movied): void{
    this.selectedMovie = M;
  }
  
  

 

 
  
}
