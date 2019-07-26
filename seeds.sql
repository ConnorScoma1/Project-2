-- Drops the events if it exists currently --
DROP DATABASE IF EXISTS findEvent_db ;
-- Creates the "eve" database --
CREATE DATABASE findEvent_db;

USE findEvent_db;

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
  eventName VARCHAR (45) NOT NULL,
  location VARCHAR (45) NOT NULL,
  eventDate DATETIME NOT NULL,
  startTime TIME (0) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO events (eventName, location, eventDate, startTime)
VALUES ("Brewers vs Reds", "Milwakee, Wisconsin", "2019-07-27", "12:05:00");

select * from events; 