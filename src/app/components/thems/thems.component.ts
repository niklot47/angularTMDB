import { Component, OnInit } from '@angular/core';
import {DateService} from "../../data/date.service";

@Component({
  selector: 'app-thems',
  templateUrl: './thems.component.html',
  styleUrls: ['./thems.component.css']
})
export class ThemsComponent implements OnInit {
  ngClass: string = 'wrap color1';

  constructor(private dateService:DateService) { }

  ngOnInit(): void {
    this.ngClass = `wrap color${localStorage.getItem('theme') || '1'}`;
    this.dateService.theme.next(localStorage.getItem('theme') || '1');
  }

  select(theme: string) {
    this.dateService.theme.next(theme);
    localStorage.setItem('theme', theme);
    this.ngClass =`wrap color${theme}`;
  }
}
