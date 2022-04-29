import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isDarkThemeIsActive: boolean;
  darkThemeSubscription: Subscription;
  isCardMode: boolean = false;

  @Input() isEditMode: boolean = false;
  @Output() changeEdit = new EventEmitter();

  constructor(private localStorageService: LocalStorageService) {
    this.isDarkThemeIsActive = this.localStorageService.getDarkMode();
    this.darkThemeSubscription = localStorageService.changeDarkMode.subscribe(
      (value) => {
        this.isDarkThemeIsActive = value;
      }
    );
  }

  // ngOnInit(): void {

  // }

  switchTheme() {
    // this.changeTheme.emit(!this.isDarkThemeIsActive);
    // localStorage.setItem(
    //   'isDarkThemeActive',
    //   (!this.isDarkThemeIsActive).toString()
    // );
    // console.log(`[HEAD] isdark: ${this.isDarkThemeIsActive}`);
    this.localStorageService.setDarkMode(!this.isDarkThemeIsActive);
  }
  switchCardMode() {
    // this.changeCard.emit(!this.isCardMode);
    // localStorage.setItem('isCardView', (!this.isCardMode).toString());
  }
  switchEditMode() {
    this.changeEdit.emit(!this.isEditMode);
  }
}
