import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyShort',
})
export class MoneyShortPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 1_000_000_000) return `$${~~(value / 100_000_000) / 10}B`;
    if (value > 1_000_000) return `$${~~(value / 100_000) / 10}M`;
    if (value > 1000) return `$${~~(value / 100) / 10}K`;
    return `$${value}`;
  }
}
