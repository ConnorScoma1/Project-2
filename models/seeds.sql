-- Drops the events if it exists currently --
DROP DATABASE IF EXISTS findevent_db;
-- Creates the "eve" database --
CREATE DATABASE findevent_db;

USE findevent_db;

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (45) NOT NULL,
  date DATETIME NOT NULL,
  location VARCHAR (45) NOT NULL,
  eventType VARCHAR (45) NOT NULL, 
  PRIMARY KEY (id)
);

INSERT INTO events (name, location, date, eventType)
VALUES ("Brewers vs Reds", "Milwakee, Wisconsin", "2019-07-27", "sporting event");

select * from events; 