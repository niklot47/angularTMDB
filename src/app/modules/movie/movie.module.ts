import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {MovieRoutingModule} from "./movie-routing.module";
import {MovieService} from "./service/movie.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRoutingModule
  ],
  providers:[
    MovieService
  ]
})
export class MovieModule { }
