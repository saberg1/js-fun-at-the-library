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
  for(var i = 0; i < 5; i++){
    return titles[i].title
  }
}

function searchShelf(sciFiShelf, titles){
  for(var i = 0; i < sciFiShelf.length; i++){
    if(sciFiShelf[i].title.includes(titles)){
      return true
    } else {
      return false
    }
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};