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
      'Drive',
      'this is simply to see if it works',
      'assets/img/drivep.jpg',
      '2021-12-16',
      'horror',
      1,
    ),
    new movied(
      'pulp fiction',
      'this is simply to see if it works',
      'assets/img/pulp-fictionp.jpg',
      '2021-12-16',
      'horror',
      2,
    ),
  ];

  ngOnInit(): void {}
}