import {IMovieShort} from "./movie-short.interface";

export interface IPage {
  page: number,
  results: IMovieShort[],
  total_pages: number,
  total_results: number,
}
