import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import Movie from '../movie';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent /*implements OnInit*/ {
  @Input() isModal!: boolean;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() requestAdd = new EventEmitter<Movie>();

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
    let { name, year, money, picture, actors } = this.addMovieForm.value;
    // console.log(this.addMovieForm.value);
    let movie = new Movie(name, year, money, picture, actors);
    this.requestAdd.emit(movie);
    this.closeModal.emit(!this.isModal);
  }

  processCancel(): void {
    this.closeModal.emit(!this.isModal);
  }
}
