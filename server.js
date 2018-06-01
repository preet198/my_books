const express = require("express");
const path = require("path");
const Books = require("./models/book");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
// this is a comment
const app = express();

// Allow override of HTTP methods based on the query string ?_method=DELETE
app.use(methodOverride("_method"));

// Add the HTTP body onto the request object in all route handlers.
app.use(bodyParser.urlencoded({ extended: false }));

// Allow the port to be set by an environment variable when run (PORT=4000 node server.js)
// and fallback to a default to 4567 if it's not supplied.
const PORT = process.env.PORT || 4567;

// Serve any files in the public folder at the "/public" route.
app.use("/public", express.static("public"));

// Set the folder for where our views are.
app.set("views", path.join(__dirname, "views"));

// Tell Express that we use EJS in our views.
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("homepage");
});

function start() {
    // Initializes the client with the API key and the Translate API.
    gapi.client.init({
      'apiKey': 'IzaSyBiybSUABWHpyU6mwl3hebmGYAg3W4GrKY',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
    }).then(function() {
      // Executes an API request, and returns a Promise.
      // The method name `language.translations.list` comes from the API discovery.
      return gapi.client.language.translations.list({
        q: 'hello world',
        source: 'en',
        target: 'de',
      });
    }).then(function(response) {
      console.log(response.result.data.translations[0].translatedText);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };

  // Loads the JavaScript client library and invokes `start` afterwards.
  gapi.load('client', start);


app.get("/dogs", (request, response) => {
  Dog.all().then(dogs => {
    response.render("dogs/index", { dogs: dogs });
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
