import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../interface";

@Component({
  selector: 'app-bage',
  templateUrl: './bage.component.html',
  styleUrls: ['./bage.component.css']
})
export class BageComponent implements OnInit {
@Input()
genre : IGenre;

  constructor() { }

  ngOnInit(): void {
  }

}
