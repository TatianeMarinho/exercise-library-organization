const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  const generos = ['Fantasia', 'Ficção Científica'];
  return books.filter((book) => generos.includes(book.genre));
};

const oldBooksOrdered = (year) => books
  .filter((book) => (year - book.releaseYear) >= 60)
  .sort((yearA, yearB) => (yearA.releaseYear - yearB.releaseYear));

oldBooksOrdered(2020);

const booksByAuthorBirthYear = (birthYear) => books
  .filter((book) => book.author.birthYear === birthYear)
  .map((element) => element.name);

booksByAuthorBirthYear(1920);

const fantasyOrScienceFictionAuthors = () =>
  fantasyOrScienceFiction()
    .map((book) => book.author.name)
    .sort();

fantasyOrScienceFictionAuthors();

const oldBooks = (year) => books
  .filter((book) => (year - book.releaseYear) >= 60)
  .map((element) => element.name);

oldBooks(2022);

const authorWith3DotsOnName = () => books
  .find((book) => (book.author.name
    .split(' ').filter((inicial) => inicial.endsWith('.')).length === 3
  )).name;

console.log(authorWith3DotsOnName());

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
