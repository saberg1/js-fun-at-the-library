function createLibrary(library){
  denverLibrary = {
    name: library,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return denverLibrary;
};

function addBook(library, title){
  if(title.genre === 'fantasy'){
  library.shelves.fantasy.push(title);
  } else if (title.genre === 'nonFiction'){
    library.shelves.nonFiction.push(title);
  } else if (title.genre === 'fiction'){
    library.shelves.fiction.push(title);
  };
};

function checkoutBook(library, title, genre){
  if(genre === 'fantasy' && library.shelves.fantasy.length >= 1){
      library.shelves.fantasy.splice(0,1);
      return `You have now checked out ${title} from the ${library.name}`;
  } else if (genre === 'nonFiction' && library.shelves.nonFiction.length >= 1){
      library.shelves.nonFiction.splice(0,1);
      return `You have now checked out ${title} from the ${library.name}`;
  } else if (genre === 'fiction' && library.shelves.fiction.length >= 1) {
      library.shelves.fiction.splice(0,1);
      return `You have now checked out ${title} from the ${library.name}`;
  } else {
      return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  };
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};