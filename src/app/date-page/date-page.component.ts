import { Component, Input, OnInit } from '@angular/core';
import { movied } from '../movied.model';
import {moviesdesc} from '../mock-movied';
import {MovieService} from '../movie.service';




@Component({
  selector: 'app-date-page',
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.css'],
})
export class DatePageComponent implements OnInit {

 constructor() { }

  M = moviesdesc;

  ngOnInit(): void {}

  selectedMovie?: movied;

  onSelect(M: movied): void{
    this.selectedMovie = M;
  }
  
}


