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

  M = moviesdesc;

  ngOnInit(): void {}

  selectedMovie?: movied;

  onSelect(M: movied): void{
    this.selectedMovie = M;
  }
  
}
