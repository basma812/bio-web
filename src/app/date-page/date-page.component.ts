import { Component, OnInit } from '@angular/core';

import { movied } from './movied.model';


@Component({
  selector: 'app-date-page',
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.css'],
})
export class DatePageComponent implements OnInit {
  constructor() {}

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

  ngOnInit(): void {}
}

