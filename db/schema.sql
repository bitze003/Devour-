DROP DATABASE IF EXISTS `burgers_db`;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured BOOLEAN,
	PRIMARY KEY (id)

);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheese", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Veggie", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Turkey", false);