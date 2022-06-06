import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {API_KEY, urls} from "../../../constants";
import {IGenresResponse} from "../../../interface";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) {
  }

  getAll():Observable<IGenresResponse>{
    return this.httpClient.get<IGenresResponse>(`${urls.genres}?api_key=${API_KEY}`)
  }
}
