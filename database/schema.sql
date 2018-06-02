


DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS books;
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  author VARCHAR(250),
  country VARCHAR(250),
  imageLink TEXT,
  book_language VARCHAR(250),
  link TEXT,
  pages VARCHAR(250),
  title VARCHAR(250),
  release_year INTEGER
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password_digest TEXT,
  fav_books INTEGER REFERENCES books(id)
);