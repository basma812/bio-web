import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePageComponent } from './date-page/date-page.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 // { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent},
  { path: 'detail/:id', component: DatePageComponent},
  { path: 'dashboard', component: DashboardComponent}
 
 
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }