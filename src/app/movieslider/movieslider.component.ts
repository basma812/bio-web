import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieslider',
  templateUrl: './movieslider.component.html',
  styleUrls: ['./movieslider.component.css']
})
export class MoviesliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sliderArray = [
    {img: 'assets/img/drivep.jpg'},
    {img: 'assets/img/leonp.jpg'},

  ]

}
