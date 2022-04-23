import Movie from './movie';

export const FILMS: Movie[] = [
  new Movie(
    'VSCode Anventures',
    1998,
    200000,
    'film-3.jpg',
    ['Tim Bom', 'Alaba babla'],
    0,
    new Date('02-04-2022')
  ),
  new Movie(
    'Master or Main?',
    2023,
    46486,
    'film-5.jpg',
    ['Tim Bom', 'Alaba babla'],
    1,
    new Date('03-17-2022')
  ),
  new Movie(
    'Mining on CPU',
    2015,
    3511667671,
    'film-6.jpg',
    ['Tim Bom', 'Alaba babla'],
    2,
    new Date('05-16-2019')
  ),
  new Movie(
    'DOS',
    2015,
    3535315,
    'film-1.jpg',
    ['Tim Bom', 'Alaba babla'],
    2,
    new Date('9-03-2018')
  ),
  new Movie(
    'Angular for kids',
    2015,
    1355,
    'film-2.jpg',
    ['Kids', 'Teacher', 'Angular'],
    2,
    new Date('12-30-2002')
  ),
];
// export const FILMS: IMovie[] = [
//   {
//     id: 0,
//     name: 'VSCode Anventures',
//     year: 1998,
//     money: 10,
//     picture: 'film-3.jpg',
//     actors: ['Tim Bom', 'Alaba babla'],
//     creationDate: Date.now(),
//   },
//   {
//     id: 1,
//     name: 'Master or Main?',
//     year: 2023,
//     money: 313004124142,
//     picture: 'film-5.jpg',
//     actors: ['Man Boy', 'Woman girl'],
//     creationDate: Date.now(),
//   },
//   {
//     id: 2,
//     name: 'Mining on CPU',
//     year: 2015,
//     money: 435000,
//     picture: 'film-6.jpg',
//     actors: ['Home', 'C.P. Unit'],
//     creationDate: Date.now(),
//   },
// ];
