import {
  Component,
  OnInit,
  Input,
  Pipe,
  Output,
  EventEmitter,
} from '@angular/core';
// import { EventEmitter } from 'stream';
import Movie from '../movie';
// import IMovie from '../IMovie';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent {
  @Input() film: any;
  @Input() isCardMode: boolean = false;
  @Input() isDarkThemeIsActive: boolean = false;
  @Input() isEditMode: boolean = false;
  @Output() deleteRequest: EventEmitter<Movie> = new EventEmitter<Movie>();

  deleteMovie(movie: Movie) {
    this.deleteRequest.emit(movie);
  }
}
