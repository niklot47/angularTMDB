import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {API_KEY, urls} from "../../../constants";
import {IMovieDetail, IPage} from "../../../interface";

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private httpClient:HttpClient) {
  }

  getMovie(id:string):Observable<IMovieDetail>{
    return this.httpClient.get<IMovieDetail>(`${urls.movie}/${id}?api_key=${API_KEY}`)
  }

  similar(id :number):Observable<IPage>{
    return  this.httpClient.get<IPage>(`${urls.movie}/${id}/similar?api_key=${API_KEY}`)
  }

}




