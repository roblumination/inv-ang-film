import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isDarkThemeIsActive: boolean = true;
  @Input() isCardMode: boolean = false;
  @Input() isEditMode: boolean = false;
  @Output() changeTheme = new EventEmitter();
  @Output() changeCard = new EventEmitter();
  @Output() changeEdit = new EventEmitter();

  switchTheme() {
    this.changeTheme.emit(!this.isDarkThemeIsActive);
    localStorage.setItem(
      'isDarkThemeActive',
      (!this.isDarkThemeIsActive).toString()
    );
  }
  switchCardMode() {
    this.changeCard.emit(!this.isCardMode);
    localStorage.setItem('isCardView', (!this.isCardMode).toString());
  }
  switchEditMode() {
    this.changeEdit.emit(!this.isEditMode);
  }
}
