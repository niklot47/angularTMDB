import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {MoviesRoutingModule} from "./movies-routing.module";
import {MoviesService} from "./services/movies.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule
  ],
  providers:[
    MoviesService
  ]
})
export class MoviesModule { }
