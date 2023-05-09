const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  const generos = ['Fantasia', 'Ficção Científica'];
  return books.filter((book) => generos.includes(book.genre));
};
fantasyOrScienceFiction();

const oldBooksOrdered = (year) => books
  .filter((book) => (year - book.releaseYear) >= 60)
  .sort((yearA, yearB) => (yearA.releaseYear - yearB.releaseYear));

oldBooksOrdered(2020);

const booksByAuthorBirthYear = (birthYear) => books
  .filter((book) => book.author.birthYear === birthYear)
  .map((element) => element.name);

console.log(booksByAuthorBirthYear(1920));

const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
};

const oldBooks = (year) => {
  // escreva seu código aqui
};

const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
