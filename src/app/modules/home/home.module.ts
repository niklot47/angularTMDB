import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./components/home/home.component";
import { PopularComponent } from './components/popular/popular.component';
import {PopularService} from "./service/popular.service";
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { SearchBigComponent } from './components/search-big/search-big.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BageComponent} from "../../components/bage/bage.component";

@NgModule({
  declarations: [
    HomeComponent,
    PopularComponent,
    MovieCardComponent,
    ToolBarComponent,
    SearchBigComponent,
    BageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    MovieCardComponent,
    BageComponent
  ],
  providers: [
    PopularService
  ]
})
export class HomeModule { }
