class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patron, morning){
    if(morning === true){
      return `Good morning, ${patron}!`
  } else {
      return `Hello, ${patron}!`
    }
  }
  findBook(title){
    for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if (this.library.shelves.fantasy[i].title === title) {
        this.library.shelves.fantasy.splice([i], 1);
        return `Yes, we have ${title}`
    } else {
        return `Sorry, we do not have ${title}`
  }
}
  }
  calculateLateFee(days){
    return Math.ceil(days * 0.25)
  }
}
module.exports = Librarian;