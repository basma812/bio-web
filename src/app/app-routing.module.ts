import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {home} from './home/home.component'

const routes: Routes = [
  { path: '', component: home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }