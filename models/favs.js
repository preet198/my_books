const db = require("../database/connection");

const Favs = {};

Favs.create = (bookid, userid) => 
    db.one(`INSERT INTO fav_books (bookid, userid) Values ($1, $2)`,[bookid, userid]);



module.exports = Favs;