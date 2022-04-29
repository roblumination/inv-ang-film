import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  darkMode: boolean;
  cardMode: boolean;
  modalMode: boolean = false;
  editMode: boolean = false;
  changeDarkMode: Subject<boolean> = new Subject<boolean>();
  changeCardMode: Subject<boolean> = new Subject<boolean>();
  changeModalMode: Subject<boolean> = new Subject<boolean>();
  changeEditMode: Subject<boolean> = new Subject<boolean>();

  constructor(private localStorageServ: LocalStorageService) {
    this.darkMode = this.localStorageServ.getItem('darkMode');
    this.cardMode = this.localStorageServ.getItem('cardMode');
  }

  setDarkMode(value: boolean): void {
    // localStorage.setItem('darkMode', isDarkMode.toString());
    this.localStorageServ.setItem('darkMode', value);
    this.darkMode = value;
    this.changeDarkMode.next(value);
  }

  setModalMode(value: boolean): void {
    this.modalMode = value;
    this.changeModalMode.next(value);
  }

  setCardMode(value: boolean): void {
    this.localStorageServ.setItem('cardMode', value);
    this.cardMode = value;
    this.changeCardMode.next(value);
  }

  setEditMode(value: boolean): void {
    this.editMode = value;
    this.changeEditMode.next(value);
  }
}
