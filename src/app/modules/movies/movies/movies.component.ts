import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {DateService} from "../../../data/date.service";
import {ActivatedRoute} from "@angular/router";
import {IMovieShort, IPage} from "../../../interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  result: IPage;
  movies: IMovieShort[];
  query: string = '';

  constructor(private moviesService:MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
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
