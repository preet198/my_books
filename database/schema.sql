


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
  password_digest VARCHAR NOT NULL,
  fav_books INTEGER REFERENCES books(id)
);