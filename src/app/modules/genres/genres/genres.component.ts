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

  constructor(private genresService:GenresService, private dateService:DateService) { }

  ngOnInit(): void {
    this.genresService.getAll().subscribe(value => {
      this.genres = value.genres;
      this.dateService.genresList.next(JSON.stringify(this.genres));
    })

  }


}
