import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {MovieService} from "../service/movie.service";
import {IGenre, IMovieDetail, IMovieShort, IPage} from "../../../interface";
import {allPosterPath, size} from "../../../constants";
import {DateService} from "../../../data/date.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: IMovieDetail;
  genres: IGenre[];
  similar: IMovieShort[];


  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private dateService: DateService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      this.movieService.getMovie(params['id']).subscribe(value => {
        this.movie = allPosterPath(value, size.poster_sizes.original) as IMovieDetail;

        this.movieService.similar(this.movie.id).subscribe(value => this.similar = value.results)
      })
    );
  }
}
