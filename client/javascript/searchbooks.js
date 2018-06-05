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
      // pic.setAttribute("src", "images/hydrangeas.jpg")
          
      for (let i = 0; i < response.items.length; i++) {
            const item = response.items[i];
            let pic = item.volumeInfo.imageLinks.thumbnail;
            let title = item.volumeInfo.title ;
            let author = item.volumeInfo.authors[0];
             document.getElementById("output").innerHTML +=   '<li>' +  title + '<br>' + 'BY: ' + author + '<br>' +  '<img src="' +  pic + '">'
      };
    });

  //   if (search === "") {
  //     alert("Must enter something");
  //   } else {
  //     let title = "";
  //     let author = "";
  //     let img = "";
  //     let url = "";
  //   }
}