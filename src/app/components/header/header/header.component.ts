import { Component, OnInit } from '@angular/core';

import {DateService} from "../../../data/date.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  color:string;
  ngClass: string = 'wrap color1';

  constructor(private dateService:DateService) { }

  ngOnInit(): void {
    this.dateService.theme.subscribe(value => this.ngClass = `wrap color${value}`);

  }

}
