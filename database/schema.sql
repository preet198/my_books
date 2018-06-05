DROP TABLE IF EXISTS fav_books;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  author VARCHAR(250),
  title VARCHAR(250),
  link TEXT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL unique,
  password_digest VARCHAR NOT NULL
);

CREATE TABLE fav_books(
  id SERIAL PRIMARY KEY,
  booksid INTEGER REFERENCES books(id),
  userid INTEGER REFERENCES users(id)
);