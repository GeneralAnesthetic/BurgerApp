DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id int
    AUTO_INCREMENT NOT NULL ,
	name varchar
    (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);

    INSERT INTO burgers
        (name)
    VALUES
        ('Greasy Corn-Measles');
    INSERT INTO burgers
        (name)
    VALUES
        ('Skittles & Pork-Fat');
    INSERT INTO burgers
        (name, devoured)
    VALUES
        ('PBJ with Stink-Beetle', true);
    INSERT INTO burgers
        (name, devoured)
    VALUES
        ('The Marilyn Manson Special', true);
    INSERT INTO burgers
        (name, devoured)
    VALUES
        ("The Joe Biden Collector's Burger", true);
    INSERT INTO burgers
        (name)
    VALUES
        ('Blue Cheese & Pickled Feet');

    SELECT *
    FROM burgers
