import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { MainLayoutComponent } from './layots/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header/header.component';
import { MovieComponent } from './modules/movie/movie/movie.component';
import { GenresComponent } from './modules/genres/genres/genres.component';
import {GenresModule, HomeModule} from "./modules";
import { ByGenreComponent } from './modules/by-genre/by-genre/by-genre.component';
import { BageComponent } from './components/bage/bage.component';
import { MoviesComponent } from './modules/movies/movies/movies.component';
import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ThemsComponent } from './components/thems/thems.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MovieComponent,
    GenresComponent,
    ByGenreComponent,
    MoviesComponent,
    SearchComponent,
    ThemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenresModule,
    HomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    SearchComponent,
    GenresComponent,
    BageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
