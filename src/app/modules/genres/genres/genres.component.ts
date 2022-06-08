import { Component, OnInit } from '@angular/core';
import {GenresService} from "../service/genres.service";
import {IGenre} from "../../../interface";
import {DateService} from "../../../data/date.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenre[];
  ngClass: string = 'wrap color1';

  constructor(private genresService:GenresService, private dateService:DateService) { }

  ngOnInit(): void {
    this.dateService.theme.subscribe(value => this.ngClass = `wrap color${value}`);

    this.genresService.getAll().subscribe(value => {
      this.genres = value.genres;
      this.dateService.genresList.next(JSON.stringify(this.genres));
    })

  }


}
