const db = require("../database/connection");

const Favs = {};

Favs.create = (booksid, userid) => {
    return db.one(`INSERT INTO fav_books (booksid, userid) Values ($1, $2) RETURNING *`,[booksid, userid]);
};


module.exports = Favs;