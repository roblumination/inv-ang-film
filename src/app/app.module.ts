import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { MoneyShortPipe } from './money-short.pipe';
import { DateFormatUaPipe } from './date-format-ua.pipe';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { AppSearchPipe } from './app-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    MoneyShortPipe,
    DateFormatUaPipe,
    HeaderComponent,
    ModalComponent,
    AppSearchPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
