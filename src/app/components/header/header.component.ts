import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isDarkMode: boolean;
  isCardMode: boolean;
  isEditMode: boolean;
  darkModeSubcr: Subscription;
  cardModeSubcr: Subscription;
  editModeSubcr: Subscription;

  constructor(private sharedService: SharedService) {
    this.isCardMode = this.sharedService.cardMode;
    this.isDarkMode = this.sharedService.darkMode;
    this.isEditMode = this.sharedService.editMode;

    this.darkModeSubcr = sharedService.changeDarkMode.subscribe((value) => {
      this.isDarkMode = value;
    });
    this.cardModeSubcr = sharedService.changeCardMode.subscribe((value) => {
      this.isCardMode = value;
    });
    this.editModeSubcr = sharedService.changeEditMode.subscribe((value) => {
      this.isEditMode = value;
    });
  }

  switchTheme() {
    this.sharedService.setDarkMode(!this.isDarkMode);
  }
  switchCardMode() {
    this.sharedService.setCardMode(!this.isCardMode);
  }
  switchEditMode() {
    this.sharedService.setEditMode(!this.isEditMode);
  }
}
