


DELETE FROM books;

INSERT INTO books
 (author, country, imageLink, book_language, link, pages, title, release_year)
VALUES 
  ('Chinua Achebe', 'Nigeria', 'images/things-fall-apart.jpg', 'English', 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',209,'Things Fall Apart',1958),
  ('Hans Christian Andersen', 'Denmark','images/fairy-tales.jpg','Danish','https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',784,'Fairy tales',1836),
  ('Dante Alighieri', 'Italy','images/the-divine-comedy.jpg', 'Italian','https://en.wikipedia.org/wiki/Divine_Comedy\n',928,'The Divine Comedy',1315),
  ('Jane Austen','United Kingdom','images/pride-and-prejudice.jpg', 'English','https://en.wikipedia.org/wiki/Pride_and_Prejudice\n', 226,'Pride and Prejudice',1813),
  ('Samuel Beckett','Republic of Ireland','images/molloy-malone-dies-the-unnamable.jpg','French, English','https://en.wikipedia.org/wiki/Molloy_(novel)\n', 256,'Molloy, Malone Dies, The Unnamable, the trilogy', 1952),
  ('Giovanni Boccaccio','Italy','images/the-decameron.jpg','Italian', 'https://en.wikipedia.org/wiki/The_Decameron\n',1024,'The Decameron',1351);
 