import { Injectable } from '@angular/core';
import Movie from './IMovie';
import { FILMS } from './mock-films';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  movieList = FILMS;

  constructor() {}

  getMoviesAll(): Movie[] {
    return this.movieList;
  }

  getMovieById(id: any) {
    return this.movieList.filter((movie) => {
      return movie.id == id;
    })[0];
  }

  // setMovieById(id: any) {
  //   this.getMovieById() =
  // }

  deleteMovie(id: any) {
    this.movieList = this.movieList.filter((mov) => {
      return mov.id !== id;
    });
  }

  addMovie(movie: Movie) {
    this.movieList.push(movie);
  }

  setMovieIsFavorite(id: any, isFav: boolean) {
    this.getMovieById(id).isFavorite = isFav;
  }
}
