import IMovie from './IMovie';

export default class Movie implements IMovie {
  constructor(
    name: string,
    year: number,
    money: number,
    picture: string,
    actors: string[],
    date: Date = new Date()
  ) {
    this.id = Movie.generateUniqueId();
    this.name = name;
    this.year = year;
    this.money = money;
    this.picture = picture;
    this.actors = actors;
    this.creationDate = date;
    this.isFavorite = false;
  }
  id: number;
  name: string;
  year: number;
  money: number;
  picture: string;
  actors: string[];
  creationDate: Date;
  isFavorite: boolean;

  static generateUniqueId(): number {
    return ~~(Math.random() * 10000000000);
  }
}
