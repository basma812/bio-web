import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-moviesliders',
  templateUrl: './moviesliders.component.html',
  styleUrls: ['./moviesliders.component.css']
})
export class MovieslidersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ["<img class:'prev' src='assets/img/outline_arrow_back_ios_black_24dp.png'>","<img class:'next' src='assets/img/outline_arrow_forward_ios_black_24dp.png'>"],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 6
        }
      },
      nav: true
   
  }

}