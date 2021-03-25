function shelfBook(title, sciFiShelf) {
  if(sciFiShelf.length < 3){
    sciFiShelf.unshift(title)
  } else {
    return
  }
}

function unshelfBook(title, sciFiShelf){
  for(var i = 0; i < sciFiShelf.length; i++){
    if(title === sciFiShelf[i].title){
     var titleIndex = sciFiShelf.indexOf(sciFiShelf[i])
     sciFiShelf.splice(titleIndex, 1)
    }
  }
}

function listTitles(titles){
console.log(titles.title)
  
}
























module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};