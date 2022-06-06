import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./components/home/home.component";
import { PopularComponent } from './components/popular/popular.component';
import {PopularService} from "./service/popular.service";
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";

@NgModule({
  declarations: [
    HomeComponent,
    PopularComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  exports: [
    MovieCardComponent
  ],
  providers: [
    PopularService
  ]
})
export class HomeModule { }
