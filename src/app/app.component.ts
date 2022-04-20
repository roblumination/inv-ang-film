import { Component, OnInit } from '@angular/core';
import { FILMS } from './mock-films';
import Movie from './IMovie';
import { FormsModule } from '@angular/forms';
import { AppSearchPipe } from './app-search.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  isDarkThemeIsActive: boolean = true;
  isCardMode: boolean = false;
  isModalMode: boolean = false;
  isEditMode: boolean = false;

  films = FILMS;
  sortedFilms = this.films;
  searchedFilms = this.sortedFilms;
  searchedValue: string = '';

  ngOnInit(): void {
    this.isCardMode = JSON.parse(localStorage.getItem('isCardMode') || 'true');
    this.isDarkThemeIsActive = JSON.parse(
      localStorage.getItem('isDarkThemeIsActive') || 'false'
    );
  }

  ngOnChanges(): void {
    console.log('test');
  }

  switchDarkTheme(): void {
    this.isDarkThemeIsActive = !this.isDarkThemeIsActive;
    localStorage.setItem(
      'isDarkThemeIsActive',
      this.isDarkThemeIsActive.toString()
    );
  }

  switchEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  addMovie(movie: Movie): void {
    // console.log('Got it!');
    // console.log(movie);
    this.films.push(movie);
  }

  removeMovie(movie: Movie): void {
    this.films = this.films.filter((mov) => {
      return mov !== movie;
    });
  }

  switchListCards(): void {
    this.isCardMode = !this.isCardMode;
    localStorage.setItem('isCardMode', this.isCardMode.toString());
  }

  switchModalMode(): void {
    this.isModalMode = !this.isModalMode;
    console.log(this.isModalMode);
  }
}
