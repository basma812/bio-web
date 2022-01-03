import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesliderComponent } from './movieslider/movieslider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
