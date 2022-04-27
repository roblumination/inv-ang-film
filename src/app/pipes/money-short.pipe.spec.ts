import { MoneyShortPipe } from './money-short.pipe';

describe('MoneyShortPipe', () => {
  it('create an instance', () => {
    const pipe = new MoneyShortPipe();
    expect(pipe).toBeTruthy();
  });
});
