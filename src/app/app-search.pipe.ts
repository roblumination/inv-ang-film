import { Pipe, PipeTransform } from '@angular/core';
import Movie from './movie';

@Pipe({
  name: 'appSearch',
})
export class AppSearchPipe implements PipeTransform {
  transform(list: Movie[], searchText: string): Movie[] {
    if (!list) return [];
    if (!searchText) return list;

    searchText = searchText.toLocaleLowerCase();
    return list.filter((movie) => {
      return movie.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
