import {Component, Input, OnInit} from '@angular/core';

import {IMovieShort} from "../../interface";
import {allPosterPath, size} from "../../constants";
import {DateService} from "../../data/date.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnInit {
  ngClass: string = 'wrap color1';

  @Input()
  movie:IMovieShort;

  constructor(private dateService:DateService) { }

  ngOnInit(): void {
    this.movie = allPosterPath(this.movie, size.still_sizes.w300) as IMovieShort;
    this.dateService.theme.subscribe(value => this.ngClass = `wrap color${value}`);
  }

}
