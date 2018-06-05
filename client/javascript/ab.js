
  // to grab things in
  function getbook() {
    const search = document.getElementById("search").value;
    // document.getElementById("output").innerHTML = "";
    console.log(search);

    fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBiybSUABWHpyU6mwl3hebmGYAg3W4GrKY`
      )
        .then(response => response.json())
        .then(json => {
          console.log(json);
          
        });


    // if (search === '') {
    //     alert('Must enter something')
    // } else {
    //     let title = '';
    //     let author = '';
    //     let img = '';
    //     let  url = '';
    // }
}

  const findit = document
    .getElementById("button")
    .addEventListener("click", getbook, false);
