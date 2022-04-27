import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListFavoriteComponent } from './movie-list-favorite.component';

describe('MovieListFavoriteComponent', () => {
  let component: MovieListFavoriteComponent;
  let fixture: ComponentFixture<MovieListFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
