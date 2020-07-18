-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burger_db;

--Create the `burgers_db`.
CREATE DATABASE burger_db;

--Switch to or use the `burgers_db`
USE burger_db;

--Create a `burgers` table: id, name devoured
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (id)
);
