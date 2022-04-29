import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  changeDarkMode: Subject<boolean> = new Subject<boolean>();
  // changeCardMode: Subject<boolean> = new Subject<boolean>();
  darkMode: boolean;
  // cardMode: boolean = false;

  constructor() {
    this.darkMode = this.getDarkMode();
    // this.cardMode = this.getCardMode();
    console.log(`[SRVR] Start value darkMode: ${this.darkMode}`);
  }

  getDarkMode(): boolean {
    return JSON.parse(localStorage.getItem('darkMode') || 'false');
  }
  setDarkMode(isDarkMode: boolean): void {
    localStorage.setItem('darkMode', isDarkMode.toString());
    this.darkMode = isDarkMode;
    this.changeDarkMode.next(isDarkMode);
    console.log(`[SRVR]: darkInServer ${this.darkMode} | arg ${isDarkMode} `);
  }
  // getCardMode(): boolean {
  //   return JSON.parse(localStorage.getItem('cardMode') || 'true');
  // }
  // setCardMode(isCardMode: boolean): void {
  //   localStorage.setItem('isCardView', isCardMode.toString());
  // }
}
