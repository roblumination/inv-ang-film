import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(item: string): any {
    return JSON.parse(localStorage.getItem(item) || 'false');
  }

  setItem(item: string, value: any): void {
    localStorage.setItem(item, value.toString());
  }
}
