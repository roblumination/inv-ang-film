import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
      picture: 'film-1.jpg',
    },
    {
      name: 'VSCode Anventures',
      year: 1998,
      money: 300,
      picture: 'film-1.jpg',
    },
    { name: 'QA and Devs', year: 998, money: 100000, picture: 'film-1.jpg' },
    {
      name: 'Master or Main?',
      year: 3001,
      money: 31300,
      picture: 'film-1.jpg',
    },
    {
      name: 'Blah blah blah',
      year: 1995,
      money: 435000,
      picture: 'film-1.jpg',
    },
    { name: '/usr/bin', year: 2002, money: 513531, picture: 'film-1.jpg' },
    {
      name: 'Cants stop this hsit',
      year: 9999,
      money: 4124135,
      picture: 'film-1.jpg',
    },
  ];

  switchDarkTheme(): void {
    this.isDarkThemeIsActive = !this.isDarkThemeIsActive;
  }

  switchListCards(): void {
    this.isCardMode = !this.isCardMode;
  }
}
