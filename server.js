const express = require("express");
const path = require("path");
const Books = require("./models/book");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const session = require("express-session");
const app = express();
const fetch = require("node-fetch");

// Allow override of HTTP methods based on the query string ?_method=DELETE
app.use(methodOverride("_method"));

// Add the HTTP body onto the request object in all route handlers.
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: "some random string we should change for our application",
    resave: false,
    saveUninitialized: true
  })
);

// Allow the port to be set by an environment variable when run (PORT=4000 node server.js)
// and fallback to a default to 4567 if it's not supplied.
const PORT = process.env.PORT || 4567;

// Serve any files in the public folder at the "/public" route.
app.use("/public", express.static("public"));
app.use("/client", express.static("client"));

// Set the folder for where our views are.
app.set("views", path.join(__dirname, "views"));

// Tell Express that we use EJS in our views.
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("books/main");
});

//login page for user to login to see their fav books
app.post("/login", (request, response) => {
  User.findByUsername(request.body.username).then(user => {
    return bcrypt
      .compare(request.body.password, user.password_digest)
      .then(isPasswordCorrect => {
        if (isPasswordCorrect) {
          request.session.loggedIn = true;
          request.session.userId = user.id;
          return response.redirect(301, "/books");
        }
        response.redirect(301, "books/incorrectpws");
      });
  });
});
// request.body is info from forms
//registring user. make sure to return user
app.post("/register", (request, response) => {
  const myPlaintextPassword = request.body.password;
  const saltRounds = 10;
  request.session.loggedIn = request.body.loggedIn;
  request.session.userId = request.body.userId;
  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    const user = {
      username: request.body.username,
      password_digest: hash
    };
    return User.create(user).then(x => {
      // have to use .then else you will be redirected without having user
      request.session.id = x.id;
      response.redirect(302, "/books");
    });
  });
});
//requer login and use next fucntion. THANK YOU ERIC.
const requireLogin = (request, response, next) => {
  if (!request.session.loggedIn) {
    return response.status(403).send("You do not have access");
  }
  next();
};

//  redirect them after they are verified
app.get("/books/favbooks", requireLogin, (request, response) => {
  User.findUserById(request.session.userId).then(user => {
    response.render("books/favbooks");
  });
});
// get all books
app.get("/books", (request, response) => {
  Books.all().then(book => {
    response.render("books/index", { book: book });
  });
});

app.get("/books/searchbook", (request, response) => { 
      response.render("books/search");
});

app.get("/books/favbooks", (request, response) => {
  Books.favbooks().then(book => {
    response.render("books/favbooks", { book: book });
  });
});

// get single book
app.get("/books/:id", (request, response) => {
  const id = request.params.id;
  Books.find(id).then(book => {
    response.render("books/show", { book: book });
  });
});

app.get("/books", (request, response) => {
  Books.all().then(book => {
    response.render("books/", { book: book });
  });
});

app.post("/books", (req, res) => {
  const newBook = req.body;
  console.log(newBook);
  Books.create(newBook).then(book => {
    res.redirect(302, "/books");
  });
});


app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const updateBook = req.body;
  updateBook.id = id;
  Books.update(updateBook).then(book => {
    res.redirect(302, "/books");
  });
});

app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  Books.delete(id).then(id => {
    res.redirect(302, "/books");
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
