import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Movie from './models/IMovie';
import Moviee from './movie';
import { LocalStorageService } from './services/local-storage.service';
import { MovieServiceService } from './services/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkThemeActive: boolean;
  darkThemeSubsctipion: Subscription;
  isCardView: boolean = true;
  isModalShows: boolean = false;
  isEditMode: boolean = false;

  movies: Movie[] = [];
  // films = this.dryFilms;
  searchedValue: string = '';

  constructor(
    private movieService: MovieServiceService,
    private localStorageService: LocalStorageService
  ) {
    this.isDarkThemeActive = this.localStorageService.getDarkMode();
    this.darkThemeSubsctipion =
      this.localStorageService.changeDarkMode.subscribe((value) => {
        this.isDarkThemeActive = value;
      });
  }

  ngOnInit(): void {
    this.getMovies();
    // this.isCardView = JSON.parse(localStorage.getItem('isCardView') || 'true');
    // this.isDarkThemeActive = JSON.parse(
    //   localStorage.getItem('isDarkThemeActive') || 'false'
    // );
    // this.isCardView = this.getVarFromLocalStorage('isCardView', true);
    // this.isDarkThemeActive = this.getVarFromLocalStorage(
    //   'isDarkThemeActive',
    //   false
    // );
  }

  // getVarFromLocalStorage(param: string, defaultValue: any) {
  // //   return JSON.parse(localStorage.getItem(param) || defaultValue.toString());
  // // }

  getMovies(): void {
    this.movies = this.movieService.getMoviesAll();
  }

  addMovie(movie: Movie): void {
    this.movieService.addMovie(movie);
  }

  removeMovie(id: any): void {
    this.movieService.deleteMovie(id);
    this.getMovies();
  }

  toggleFavorite(id: any) {
    const isCurrentFavorite = this.movieService.getMovieById(id).isFavorite;
    this.movieService.setMovieIsFavorite(id, !isCurrentFavorite);
    this.getMovies();
  }

  switchModalMode(): void {
    this.isModalShows = !this.isModalShows;
    console.log(this.isModalShows);
  }

  sortFilms(sortParam: string): void {
    if (sortParam == 'name') {
      this.movies.sort((a, b) => {
        if (a.name == b.name) return 0;
        return a.name > b.name ? 1 : -1;
      });
    }
    if (sortParam == 'year') {
      this.movies.sort((a, b) => {
        if (a.year == b.year) return 0;
        return a.year > b.year ? 1 : -1;
      });
    }
    if (sortParam == 'date') {
      this.movies.sort((a, b) => {
        if (a.creationDate == b.creationDate) return 0;
        return a.creationDate > b.creationDate ? 1 : -1;
      });
    }
  }
}
