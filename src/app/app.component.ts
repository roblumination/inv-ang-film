import { Component, OnInit } from '@angular/core';
import { FILMS } from './mock-films';
import Movie from './IMovie';

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
  films = FILMS;

  ngOnInit(): void {
    this.isCardMode = JSON.parse(localStorage.getItem('isCardMode') || 'true');
    this.isDarkThemeIsActive = JSON.parse(
      localStorage.getItem('isDarkThemeIsActive') || 'false'
    );
  }

  switchDarkTheme(): void {
    this.isDarkThemeIsActive = !this.isDarkThemeIsActive;
    localStorage.setItem(
      'isDarkThemeIsActive',
      this.isDarkThemeIsActive.toString()
    );
  }

  addMovie(movie: Movie): void {}
  removeMovie(movie: Movie): void {}

  switchListCards(): void {
    this.isCardMode = !this.isCardMode;
    localStorage.setItem('isCardMode', this.isCardMode.toString());
  }
}
