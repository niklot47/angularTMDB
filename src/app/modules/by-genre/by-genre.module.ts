import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {ByGenreService} from "./services/by-genre.service";
import {ByGenreRoutingModule} from "./by-genre-routing.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ByGenreRoutingModule,
  ],
  providers:[
    ByGenreService
  ]
})
export class ByGenreModule { }
