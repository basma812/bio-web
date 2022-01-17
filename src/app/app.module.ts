import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SeatsComponent } from './seats/seats.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { MovieslidersComponent } from './moviesliders/moviesliders.component';
import { DatePageComponent } from './date-page/date-page.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,

    SeatsComponent,
    CartComponent,
    

    MovieslidersComponent,
    DatePageComponent,
    MoviesComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    CarouselModule,

    NgbModule,
    ReactiveFormsModule,

    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
