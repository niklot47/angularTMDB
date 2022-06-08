import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DateService} from "../../../../data/date.service";

@Component({
  selector: 'app-search-big',
  templateUrl: './search-big.component.html',
  styleUrls: ['./search-big.component.css']
})
export class SearchBigComponent implements OnInit {
  form: FormGroup;
  searchQuery: string;
  ngClass: string = 'wrap color1';

  constructor(private dateService:DateService) {
    this._createForm();
    this.searchQuery = ``;
  }

  ngOnInit(): void {
    this.dateService.theme.subscribe(value => this.ngClass = `wrap color${value}`);
  }

  _createForm(): void {
    this.form = new FormGroup({
      search: new FormControl('', [Validators.minLength(1), Validators.maxLength(50)])
    })
  }

  setSearch() {
    this.searchQuery = `/movies/${this.form.value['search']}`;
  }
}
