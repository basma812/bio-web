import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { movied } from '../date-page/movied.model';
import { DatePageComponent } from '../date-page/date-page.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  export interface movied{

  }

  constructor() { }

  ngOnInit(): void {
  }

}
