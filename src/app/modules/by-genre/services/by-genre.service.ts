import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {API_KEY, urls} from "../../../constants";
import {IPage} from "../../../interface";

@Injectable({
  providedIn: 'root'
})
export class ByGenreService {

  constructor(private httpClient:HttpClient) {
  }

  getById(id: number, page: number):Observable<IPage>{
    // return this.httpClient.get<IPage>(`${urls.discover}?api_key=${API_KEY}&with_genres=${id}&page=${page}`)

    // костыль, потому-что АПИ возвращает 402 если делать запрос с страницей >500
    return this.httpClient.get<IPage>(`${urls.discover}?api_key=${API_KEY}&with_genres=${id}&page=${page>500?500:page}`)
  }
}
