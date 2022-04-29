import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isModalMode: Subject<boolean>;

  constructor() {
    this.isModalMode = new Subject<boolean>();
  }
}
