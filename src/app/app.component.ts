import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  isDarkThemeIsActive = true;
  isCardMode = false;
  films = [
    {
      name: 'Revenge of DOS',
      year: 2000,
      money: 1500000,
      picture: 'film-1.jpg',
    },
    {
      name: 'Angular for Kids',
      year: 2001,
      money: 150000,
      picture: 'film-2.jpg',
    },
    {
      name: 'VSCode Anventures',
      year: 1998,
      money: 10,
      picture: 'film-3.jpg',
    },
    { name: 'QA and Devs', year: 998, money: 100000, picture: 'film-4.jpg' },
    {
      name: 'Master or Main?',
      year: 2023,
      money: 313004124142,
      picture: 'film-5.jpg',
    },
    {
      name: 'Mining on CPU',
      year: 2015,
      money: 435000,
      picture: 'film-6.jpg',
    },
    { name: 'C++ course', year: 2012, money: 513531, picture: 'film-8.jpg' },
    {
      name: 'Ruby on rails',
      year: 1984,
      money: 4124135,
      picture: 'film-7.jpg',
    },
    {
      name: 'Pair Programming',
      year: 1993,
      money: 4124135,
      picture: 'film-9.jpg',
    },
  ];

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

  switchListCards(): void {
    this.isCardMode = !this.isCardMode;
    localStorage.setItem('isCardMode', this.isCardMode.toString());
  }
}
