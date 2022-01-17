import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { movied } from '../movied.model';
import {moviesdesc} from '../mock-movied'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() M?: movied;

 // getMovies(): void {
   // this.movieService.getMovies()
    //.subscribe(Movies => this.movies = movies.slice(1,5)):
  //}

  constructor() { }

  ngOnInit(): void {
  }

}
