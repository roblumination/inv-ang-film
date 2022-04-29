import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
// import { EventEmitter } from 'stream';
import Movie from '../../movie';
// import IMovie from '../IMovie';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent {
  @Input() movie: any;
  @Input() isCardMode: boolean = false;
  @Input() isDarkMode: boolean = false;
  @Input() isEditMode: boolean = false;
  fav: boolean = false;
  @Output() deleteRequest: EventEmitter<number> = new EventEmitter<number>();
  @Output() requestToggleFav: EventEmitter<number> = new EventEmitter<number>();

  constructor(private sharedService: SharedService) {}

  deleteMovie(id: number) {
    this.deleteRequest.emit(id);
  }

  toggleFavorite(id: number) {
    // this.fav = !this.fav;
    // this.film.isFavorite = !this.film.isFavorite;
    this.requestToggleFav.emit(id);
  }
}
