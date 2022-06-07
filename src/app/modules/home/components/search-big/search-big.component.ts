import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-big',
  templateUrl: './search-big.component.html',
  styleUrls: ['./search-big.component.css']
})
export class SearchBigComponent implements OnInit {
  form: FormGroup;
  searchQuery: string;

  constructor() {
    this._createForm();
    this.searchQuery = ``;
  }

  ngOnInit(): void {

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
