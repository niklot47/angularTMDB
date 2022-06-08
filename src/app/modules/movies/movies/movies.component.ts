import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {MoviesService} from "../services/movies.service";
import {DateService} from "../../../data/date.service";
import {IMovieShort, IPage} from "../../../interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  ngClass: string = 'wrap color1';
  result: IPage;
  movies: IMovieShort[];
  query: string = '';

  constructor(private moviesService:MoviesService, private activatedRoute: ActivatedRoute, private dateService:DateService) { }



  ngOnInit(): void {
    this.dateService.theme.subscribe(value => this.ngClass = `wrap color${value}`);

    this.activatedRoute.params.subscribe(params => {
      if (params['query'] !== '-1'){
        this.moviesService.search(params['query'], 1).subscribe(value => {
          this.query = params['query'];
          this.result=value;
          this.movies=this.result.results;
        })
      }else{
        this.moviesService.popular(1).subscribe(value => {
          this.result=value;
          this.movies=this.result.results;
        })
      }
    })
  }



  setPage(number: number) {
    this.activatedRoute.params.subscribe(params => {
      if (params['query'] !== '-1'){
        this.moviesService.search(params['query'], number).subscribe(value => {
          this.result=value;
          this.movies=this.result.results;
        })
      }else{
        this.moviesService.popular(number).subscribe(value => {
          this.result=value;
          this.movies=this.result.results;
        })
      }
    })
  }
}
