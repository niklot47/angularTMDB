import { Component, OnInit } from '@angular/core';
import {PopularService} from "../../service/popular.service";
import {IMovieShort} from "../../../../interface";
import {DateService} from "../../../../data/date.service";
import {posterPath, size} from "../../../../constants";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  movies: IMovieShort[];

  constructor(private popularService:PopularService, private dateService:DateService) { }

  ngOnInit(): void {
    this.popularService.getAll().subscribe(value => {
      this.movies = value.results
      this.dateService.firstPoster.next(posterPath(this.movies[0].poster_path, size.backdrop_sizes.original))
    })
  }

}
