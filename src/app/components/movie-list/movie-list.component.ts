import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Movie from 'src/app/movie';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  // isDarkThemeActive: boolean;
  // darkThemeSubsctipion: Subscription;
  isCardMode: boolean;
  isEditMode: boolean = false;
  isDarkMode: boolean;
  cardModeSubscr: Subscription;
  // isModalShows: boolean = false;
  editModeSubscr: Subscription;
  darkModeSubscr: Subscription;
  @Input() isFavoriteMode: boolean = false;

  movies: Movie[] = [];
  // films = this.dryFilms;
  searchedValue: string = '';

  constructor(
    private movieService: MovieServiceService,
    private sharedService: SharedService,
    private _router: Router
  ) {
    this.isCardMode = this.sharedService.cardMode;
    this.isDarkMode = this.sharedService.darkMode;

    this.cardModeSubscr = this.sharedService.changeCardMode.subscribe(
      (resp) => {
        this.isCardMode = resp;
      }
    );
    this.darkModeSubscr = this.sharedService.changeDarkMode.subscribe(
      (value) => {
        this.isDarkMode = value;
      }
    );
    this.editModeSubscr = this.sharedService.changeEditMode.subscribe(
      (resp) => {
        this.isEditMode = resp;
      }
    );
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movies = this.isFavoriteMode
      ? this.movieService.getMoviesFavoriteAll()
      : this.movieService.getMoviesAll();
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

  showModal(): void {
    this.sharedService.setEditMode(true);
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

  navigateToRouteFavMain(): void {
    let routeToGo = this.isFavoriteMode ? '/main' : '/favorite';
    this._router.navigateByUrl(routeToGo);
  }
}
