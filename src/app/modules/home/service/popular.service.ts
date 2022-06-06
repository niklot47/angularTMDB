import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {API_KEY, urls} from "../../../constants";
import {IPopular} from "../../../interface";

@Injectable({
  providedIn: 'root'
})
export class PopularService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPopular> {
    return this.httpClient.get<IPopular>(`${urls.trending}?api_key=${API_KEY}`)
  }
}

