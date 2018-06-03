window.onload = function() {
  // x functionality when window loads

  // function start() {
  //   // Initializes the client with the API key and the Translate API.
  //   gapi.client
  //     .init({
  //     apiKey: "IzaSyBiybSUABWHpyU6mwl3hebmGYAg3W4GrKY",
  //     discoveryDocs: [
  //         "https://www.googleapis.com/discovery/v1/apis/translate/v2/rest"
  //     ]
  //     })
  //     .then(
  //     function(response) {
  //         console.log(response.result.data.translations[0].translatedText);
  //     },
  //     function(reason) {
  //         console.log("Error: " + reason.result.error.message);
  //     }
  //     );
  // }
  console.log("im working");

  // to grab things in
  function getbook() {
    const search = document.getElementById("search").value;
    document.getElementById("result").innerHTML = "";
    console.log(search);

    if (search === '') {
        alert('Can not be empty')
    } else {
        let title = '';
        let author = '';
        let img = '';
        let  url = '';
    }
    .get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey')
    //'https://www.googleapis.com/books/v1/volumes?q=search+terms'
    //https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
  }

  const findit = document
    .getElementById("button")
    .addEventListener("click", getbook, false);
};
