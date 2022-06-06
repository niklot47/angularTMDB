import { Component, OnInit } from '@angular/core';
import {PopularService} from "../../service/popular.service";
import {IMovieShort} from "../../../../interface";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  movies: IMovieShort[];

  constructor(private popularService:PopularService) { }

  ngOnInit(): void {
    this.popularService.getAll().subscribe(value => {
      this.movies = value.results
    })
  }

}
