import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { movied } from '../date-page/movied.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  description: movied[] = [
    new movied(
      1,
      'Drive',
      'this is simply to see if it works',
      'assets/img/drivep.jpg',
      '2021-12-16',
      'horror',
      
    ),
    new movied(
      2,
      'pulp fiction',
      'this is simply to see if it works',
      'assets/img/pulp-fictionp.jpg',
      '2021-12-16',
      'horror',
      
    ),
    new movied(
      3,
      'Fight Club',
      'this is simply to see if it works',
      'assets/img/fightclubep.jpg',
      '2021-12-16',
      'horror',

    ),
    new movied(
      4,
      'Leon',
      'this is simply to see if it works',
      'assets/img/leonp.jpg"',
      '2021-12-16',
      'horror',

    ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
