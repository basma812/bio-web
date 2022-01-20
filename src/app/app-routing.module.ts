import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePageComponent } from './date-page/date-page.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';


import { CartComponent } from './cart/cart.component';
import { DatePageComponent } from './date-page/date-page.component';
import { HomeComponent } from './home/home.component';
import { SeatsComponent } from './seats/seats.component';



const routes: Routes = [
  { path: '', component: HomeComponent },

 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent},
  { path: 'detail/:id', component: DatePageComponent},
  { path: 'dashboard', component: DashboardComponent}
 

  { path: 'date-page', component: DatePageComponent},
  { path: 'seats', component: SeatsComponent},
  { path: 'cart', component: CartComponent }

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }