import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { MoneyShortPipe } from './pipes/money-short.pipe';
import { DateFormatUaPipe } from './pipes/date-format-ua.pipe';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { AppSearchPipe } from './pipes/app-search.pipe';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListFavoriteComponent } from './components/movie-list-favorite/movie-list-favorite.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MovieListMainComponent } from './components/movie-list-main/movie-list-main.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    MoneyShortPipe,
    DateFormatUaPipe,
    HeaderComponent,
    ModalComponent,
    AppSearchPipe,
    MovieListComponent,
    MovieListFavoriteComponent,
    ToolBarComponent,
    MovieListMainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
