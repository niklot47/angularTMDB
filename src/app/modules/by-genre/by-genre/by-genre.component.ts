import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ByGenreService} from "../services/by-genre.service";
import {IGenre, IPage} from "../../../interface";
import {IMovieShort} from "../../../interface";
import {DateService} from "../../../data/date.service";

@Component({
  selector: 'app-by-genre',
  templateUrl: './by-genre.component.html',
  styleUrls: ['./by-genre.component.css']
})
export class ByGenreComponent implements OnInit {
  genres: IGenre[];
  result: IPage;
  genreId: number;
  genre: IGenre;
  movies: IMovieShort[];
  ngClass: string = 'wrap color1';

  constructor(private activatedRoute: ActivatedRoute, private byGenreService: ByGenreService, private dateService:DateService) {
  }

  ngOnInit(): void {
    this.dateService.theme.subscribe(value => this.ngClass = `wrap color${value}`);

    this.activatedRoute.params.subscribe(params => {
      this.genreId = params['id'];
      this.byGenreService.getById(params['id'], 1).subscribe(value => {
        this.result = value;
        this.movies = value.results

        this.dateService.genresList.subscribe(value=> {
          if (value !== '') {
          this.genres = JSON.parse(value);
            this.genre = this.genres.filter(v => v.id === +this.genreId)[0];
          }
        })
      })
    })
  }

  setPage(page: number) {
    this.byGenreService.getById(this.genreId, page).subscribe(value => {
      this.result = value;
      this.movies = value.results
      // console.log(this.result);
    })
  }
}
