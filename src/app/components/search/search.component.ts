import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
