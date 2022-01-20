import { Component, Input, OnInit } from '@angular/core';
import { movied } from '../movied.model';
import {moviesdesc} from '../mock-movied';
import {MovieService} from '../movie.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-date-page',
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.css'],
})
export class DatePageComponent implements OnInit {

  mov: movied | undefined;
 

 constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) { }

  ngOnInit(): void {
    this.getMovie();
   
  }

  getMovie(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
    .subscribe(movied => this.mov = movied );
  }
  

  
  
  
}


