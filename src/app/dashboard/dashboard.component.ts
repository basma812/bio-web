import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { movied } from '../movied.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  M: movied[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies()
    .subscribe(M => this.M = M.slice(0,5))
  }

}
