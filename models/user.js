const db = require("../database/connection");

const User = {};

User.create = user =>
  db.one(
    "INSERT INTO users (username, password_digest) VALUES ($1, $2) RETURNING *",
    [user.username, user.password_digest]
  );

User.findByUsername = username =>
  db.one("SELECT * FROM users WHERE username = $1", [username]);

module.exports = User;