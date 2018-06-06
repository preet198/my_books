console.log("searchbooks working now");
let title = '';
const findit = document.getElementById("book-search-form").addEventListener("submit", getbook);

// to grab things in
function getbook(e) {
  e.preventDefault();
  document.getElementById("output").innerHTML = '';
  const search = document.getElementById("search").value;
//     document.getElementById("output").innerHTML = "";
  console.log(search);
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBiybSUABWHpyU6mwl3hebmGYAg3W4GrKY`)
    .then(response => response.json())
    .then(response => {
          console.log(response);
          
      for (let i = 0; i < response.items.length; i++) {
            const item = response.items[i];
            // let pic = item.volumeInfo.imageLinks.thumbnail;
            // let title = item.volumeInfo.title ;
            // let author = item.volumeInfo.title ;
            
            if (item.volumeInfo.imageLinks.thumbnail !== undefined) {
                  document.getElementById("output").innerHTML +=   '<img src="' +  item.volumeInfo.imageLinks.thumbnail + '">' +'<h3>' +  item.volumeInfo.title  + '<br>' + '<br>' + 'BY: ' + item.volumeInfo.authors[0] + '<br>' 
            } else if (item.volumeInfo.imageLinks.thumbnail === undefined &&  item.volumeInfo.authors[0] === undefined){
                  document.getElementById("output").innerHTML +=   '<h3>' +  item.volumeInfo.title + '<br>' 
            } else {
                  document.getElementById("output").innerHTML +=   '<h3>' +  item.volumeInfo.title  + '<br>' + '<br>' + 'BY: ' + item.volumeInfo.authors[0]
            }
      };
    });
}