import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {API_KEY, urls} from "../../../constants";
import {IMovieDetail} from "../../../interface";

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private httpClient:HttpClient) {
  }

  getMovie(id:string):Observable<IMovieDetail>{
    return this.httpClient.get<IMovieDetail>(`${urls.movie}/${id}?api_key=${API_KEY}`)
  }
}

