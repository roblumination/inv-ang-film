import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatUa',
})
export class DateFormatUaPipe implements PipeTransform {
  transform(seconds: number): string {
    const MONTHS = [
      'Січ',
      'Лют',
      'Бер',
      'Кві',
      'Тра',
      'Чер',
      'Лип',
      'Сер',
      'Вер',
      'Жов',
      'Лис',
      'Гру',
    ];
    let date = new Date(seconds);
    let result = `${date.getDate()} ${
      MONTHS[date.getMonth()]
    } ${date.getFullYear()} `;
    return result;
  }
}
