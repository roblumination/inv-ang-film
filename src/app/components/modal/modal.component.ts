import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { SharedService } from 'src/app/services/shared.service';
import Movie from '../../movie';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent /*implements OnInit*/ {
  // @Input() isModal!: boolean;
  // @Input() isDarkThemeActive: boolean = false;
  // @Output() closeModal = new EventEmitter<boolean>();
  // @Output() requestAdd = new EventEmitter<Movie>();
  isDarkMode: boolean;
  isModalMode: boolean;

  darkModeSubscr: Subscription;
  modalModeSubscr: Subscription;
  // movieSubscr: Subscription;

  constructor(
    private sharedServ: SharedService,
    private movieServ: MovieServiceService
  ) {
    this.isDarkMode = this.sharedServ.darkMode;
    this.isModalMode = this.sharedServ.modalMode;

    this.darkModeSubscr = this.sharedServ.changeDarkMode.subscribe(
      (response) => {
        this.isDarkMode = response;
      }
    );
    this.modalModeSubscr = this.sharedServ.changeModalMode.subscribe(
      (response) => (this.isModalMode = response)
    );
  }

  addMovieForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.required),
    money: new FormControl(null, Validators.required),
    picture: new FormControl(null, Validators.required),
    actors: new FormArray([]),
  });

  get ActorsArray() {
    return this.addMovieForm.get('actors') as FormArray;
  }

  addActorsForm() {
    this.ActorsArray.push(new FormControl('', Validators.required));
  }

  removeActorsForm(id: number) {
    this.ActorsArray.removeAt(id);
  }

  onSumbit() {
    const { name, year, money, picture, actors } = this.addMovieForm.value;
    const movie = new Movie(name, year, money, picture, actors);
    this.movieServ.addMovie(movie);
    this.close();
    // this.requestAdd.emit(movie);
    // this.closeModal.emit(!this.isModal);
  }

  close(): void {
    this.resetForm();
    this.sharedServ.setModalMode(false);
  }

  resetForm(): void {
    this.addMovieForm.reset();
  }
}
