CREATE DATABASE Books;

\c Books

DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  Book TEXT,
  author TEXT
);
