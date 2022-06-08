import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DateService {

  genresList = new BehaviorSubject<string>('') ;
  theme = new BehaviorSubject<string>('1') ;
  firstPoster = new BehaviorSubject<string>('') ;

  constructor() { }
}
