import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPage} from "../../../interface";
import {API_KEY, urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private  httpClient:HttpClient) {
  }

  search(query :string, page :number):Observable<IPage>{
    return this.httpClient.get<IPage>(`${urls.search}?api_key=${API_KEY}&query=${query}&page=${page>500?500:page}`)
  }

  popular(page :number):Observable<IPage>{
    return this.httpClient.get<IPage>(`${urls.popular}?api_key=${API_KEY}&page=${page>500?500:page}`)
  }


}
