import { Component, OnInit } from '@angular/core';
import {DateService} from "../../../../data/date.service";
import {IGenre} from "../../../../interface";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  path: string;
  genres: IGenre[];

  constructor(private dateService:DateService) { }

  ngOnInit(): void {
    this.dateService.firstPoster.subscribe(value => {
      if(value !== ''){
        this.path = value
      }
    })

    this.dateService.genresList.subscribe(value=> {
      if (value !== '') {
        this.genres = JSON.parse(value);
      }
    })
  }

}
