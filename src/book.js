function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns){
  return { name, age, pronouns};
};

function saveReview(review, reviews){
  if(!reviews.includes(review)){
    reviews.push(review);
    };
  };

function calculatePageCount(bookTitle){
  bookTitle = bookTitle.length * 20;
  return bookTitle;
};

function writeBook(bookTitle, bookCharacter, bookGenre){
  var createBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: bookGenre,
    pageCount: calculatePageCount(bookTitle),
  };
  return createBook;
};

function editBook(title){
  title.pageCount = title.pageCount * .75
  return title.pageCount
};






module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}