import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DatePageComponent } from './date-page/date-page.component';
import { HomeComponent } from './home/home.component';
import { SeatsComponent } from './seats/seats.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'date-page', component: DatePageComponent},
  { path: 'seats', component: SeatsComponent},
  { path: 'cart', component: CartComponent }
 
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }