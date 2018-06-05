const db = require("../database/connection");

const User = {};

User.create = oneUser =>
  db.one(
    `INSERT INTO users (username, password_digest) VALUES ($1, $2) RETURNING *`,
    [oneUser.username, oneUser.password_digest]
  );


User.findByUsername = username =>
  db.one("SELECT * FROM users WHERE username = $1", [username]);

User.findUserById = userId =>
  db.one("SELECT * FROM users WHERE id = $1", [userId]);
  
module.exports = User;

