import {IMovieDetail, IMovieShort} from "../interface";

export const size = {
  backdrop_sizes: {
    w300: 'w300',
    w780: 'w780',
    w1280: 'w1280',
    original: "original"
  },

  logo_sizes: {
    w45: "w45",
    w92: "w92",
    w154: "w154",
    w185: "w185",
    w300: "w300",
    w500: "w500",
    original: "original"
  },

  poster_sizes:{
    w92:"w92",
    w154:"w154",
    w185:"w185",
    w342:"w342",
    w500:"w500",
    w780:"w780",
    original:"original"
  },
  profile_sizes:{
    w45:"w45",
    w185:"w185",
    h632:"h632",
    original:"original"
  },
  still_sizes:{
    w92:"w92",
    w185:"w185",
    w300:"w300",
    original:"original"
  }
}

export function  posterPath(short:string, width: string):string{
  return `https://image.tmdb.org/t/p/${width}${short}`;
}

export function  allPosterPath(movie: IMovieShort|IMovieDetail, width: string):IMovieShort|IMovieDetail{
  movie.poster_path = `https://image.tmdb.org/t/p/${width}${movie.poster_path}`;
  return movie
}


