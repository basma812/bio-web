import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MovieslidersComponent} from './moviesliders/moviesliders.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes =[
  {
    path:'',
    component: MovieslidersComponent, 
  },
  {
    path:'',
    component: HeaderComponent,
  },
  { path:'',
    component: HomeComponent,
  },
  {
    path:'search/:movie-search',
    component: HomeComponent,
  },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
