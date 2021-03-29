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
  var titlesOnShelf = "";
  for(var i = 0; i < titles.length; i++){
    titlesOnShelf += titles[i].title + ", "
    slicedTitles = titlesOnShelf.slice(0, -2)
  }
  return slicedTitles
}

function searchShelf(sciFiShelf, titles){
  for(var i = 0; i < sciFiShelf.length; i++){
    if(sciFiShelf[i].title === titles){
      return true
    }
  }
  return false 
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};