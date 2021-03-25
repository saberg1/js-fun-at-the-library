function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns){
  return { name, age, pronouns};
};

function saveReview(review, reviews){
  if(reviews.includes(review)){
    return;
  }else{    
    reviews.push(review);
    };
  };

function calculatePageCount(bookTitle){
  var pageAmount = bookTitle.length * 20;
  return pageAmount;
};

function writeBook(bookTitle, bookCharacter, bookGenre){
  var createBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: bookGenre,
    pageCount: calculatePageCount(bookTitle)
  };
  return createBook;
};

function editBook(title){
  var pages = title.pageCount;
  var result = pages * .75;
  title.pageCount = result;
  // title.pageCount = title.pageCount * .75
  // return title.pageCount
};






module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}