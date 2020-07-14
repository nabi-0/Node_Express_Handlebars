/*
To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"
*/
-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

--Create the `burgers_db`.
CREATE DATABASE burgers_db;

--Switch to or use the `burgers_db`
USE burgers_db;

--Create a `burgers` table: id, name devoured
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);
