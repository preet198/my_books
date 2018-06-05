const db = require("../database/connection");

const Books = {};

Books.all = function() {
    return db.any('SELECT * FROM books');
};

Books.find = function(id) {
    return db.one('select * from books where id = $1', [id]);
};
// author, country, imageLink, book_language, link, pages, title, release_year

Books.create = function (newBook) {
    return db.one('INSERT INTO books (author, title, link) VALUES ($1, $2, $3) RETURNING *',[newBook.author, newBook.title, newBook.link]);
};

Books.delete = function(id) {
    return db.result('delete from books where id = $1', [id]);
};

Books.update = function (book) {
    return db.none(
        'update books set author = $1, title = $2, link = $3 where id = $4', [book.author, book.title, book.link, book.id]
    );
};

Books.favbooks = userid =>{
 return db.any(`SELECT * FROM books 
  JOIN fav_books ON fav_books.booksid = books.id 
  JOIN users ON users.id = fav_books.userid 
  WHERE users.id = $1` ,[userid]);
};

module.exports = Books;


