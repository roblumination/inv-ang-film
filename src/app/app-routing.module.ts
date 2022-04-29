import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListFavoriteComponent } from './components/movie-list-favorite/movie-list-favorite.component';
import { MovieListMainComponent } from './components/movie-list-main/movie-list-main.component';

const routes: Routes = [
  { path: 'main', component: MovieListMainComponent },
  { path: 'favorite', component: MovieListFavoriteComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//comment
