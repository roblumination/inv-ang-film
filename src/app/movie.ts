import IMovie from './IMovie';

export default class Movie implements IMovie {
  constructor(
    name: string,
    year: number,
    money: number,
    picture: string,
    actors: string[],
    id: number = Date.now()
  ) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.money = money;
    this.picture = picture;
    this.actors = actors;
    this.creationDate = new Date();
  }
  id: number;
  name: string;
  year: number;
  money: number;
  picture: string;
  actors: string[];
  creationDate: Date;
}
