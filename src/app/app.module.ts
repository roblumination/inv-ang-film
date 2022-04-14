import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { MoneyShortPipe } from './money-short.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    MoneyShortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
