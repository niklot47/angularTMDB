import { Component, OnInit } from '@angular/core';
import {DateService} from "../../../../data/date.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngClass: string = 'wrap color1';

  constructor(private dateService:DateService) { }

  ngOnInit(): void {
    this.dateService.theme.subscribe(value => this.ngClass = `wrap color${value}`);
  }

}
