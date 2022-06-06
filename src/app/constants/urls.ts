import {environment} from '../../environments/environment';

const {API} = environment;

export const urls = {
  movie: `${API}/movie`,
  search: `${API}/search/movie`,
  popular: `${API}/movie/top_rated`,
  trending: `${API}/trending/movie/week`,
  genres: `${API}/genre/movie/list`,
  discover: `${API}/discover/movie`
}
