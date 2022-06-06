import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {MovieComponent} from "./movie/movie.component";

const routes: Routes = [{
  path: '', component: MovieComponent,
  children: []
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
