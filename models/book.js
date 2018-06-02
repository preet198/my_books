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
    return db.one('INSERT INTO books (subject, content) VALUES ($1, $2) RETURNING *',[newBook.subject, newBook.content]);
};

Books.delete = function(id) {
    return db.result('delete from books where id = $1', [id]);
};

Books.update = function (book) {
    return db.none(
        'update books set subject = $1, content = $2 where id = $3', [book.subject, book.content, book.id]
    );
};
module.exports = Books;
