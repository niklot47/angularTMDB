import {Component, Input, OnInit} from '@angular/core';

import {IGenre} from "../../interface";
import {DateService} from "../../data/date.service";

@Component({
  selector: 'app-bage',
  templateUrl: './bage.component.html',
  styleUrls: ['./bage.component.css']
})
export class BageComponent implements OnInit {
  @Input()
  genre: IGenre;
  ngClass: string = 'color1';


  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
    this.dateService.theme.subscribe(value => this.ngClass = `color${value}`)
  }

}
