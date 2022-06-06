import {Component, Input, OnInit} from '@angular/core';
import {IMovieShort} from "../../interface";
import {allPosterPath, size} from "../../constants";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnInit {

  @Input()
  movie:IMovieShort;

  constructor() {

  }

  ngOnInit(): void {
    this.movie = allPosterPath(this.movie, size.still_sizes.w300) as IMovieShort;
  }

}
