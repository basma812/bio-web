import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MovieslidersComponent } from './moviesliders/moviesliders.component';
import { SearchbarComponent } from './navbar/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MovieslidersComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
