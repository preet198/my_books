console.log('this works');

function start() {
  // Initializes the client with the API key and the Translate API.
  gapi.client
    .init({
      apiKey: "IzaSyBiybSUABWHpyU6mwl3hebmGYAg3W4GrKY",
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/translate/v2/rest"
      ]
    })
    .then(
      function(response) {
        console.log(response.result.data.translations[0].translatedText);
      },
      function(reason) {
        console.log("Error: " + reason.result.error.message);
      }
    );
}
console.log('hello');


// Loads the JavaScript client library and invokes `start` afterwards.
gapi.load("client", start);
