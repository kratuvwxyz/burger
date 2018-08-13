### Schema
DROP DATABASE IF EXISTS makeYourBurger;
CREATE DATABASE makeYourBurger;
USE makeYourBurger;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
