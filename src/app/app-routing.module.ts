import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

import {MainLayoutComponent} from "./layots/main-layout/main-layout.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children:[
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: ()=>import('./modules').then(value => value.HomeModule)},
      {path: 'movies/:query', loadChildren: ()=>import('./modules').then(value => value.MoviesModule)},
      {path: 'genre/:id', loadChildren: ()=>import('./modules').then(value => value.ByGenreModule)},
      {path: 'movie/:id', loadChildren: ()=>import('./modules').then(value => value.MovieModule)},
    ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {
}
