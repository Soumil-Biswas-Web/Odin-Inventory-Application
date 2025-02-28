CREATE DATABASE all_table_1;

// Connect to database
\c all_table_1 

CREATE TABLE trainers (
    trainer_name VARCHAR (255),
    trainer_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY
);

// check table
\d

INSERT INTO trainers(trainer_name)
VALUES ('Trainer1'), ('Trainer2'), ('Trainer3');

SELECT * FROM trainers;


CREATE TABLE pokemon (
    name VARCHAR (255),
    type1 VARCHAR (255),
    type2 VARCHAR (255),
    trainer_name VARCHAR (255),
    slot INTEGER,
    pokemon_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY
);

INSERT INTO pokemon(name, type1, type2, trainer_name, slot)
VALUES 
('charizard', 'fire', 'flying', 'Trainer1', 1),
('venusaur', 'grass', 'poison', 'Trainer1', 2),
('blastoise', 'water', 'null', 'Trainer1', 3),
('pikachu', 'electric', 'null', 'Trainer1', 4),
('snorlax', 'normal', 'null', 'Trainer1', 5),
('lapras', 'water', 'ice', 'Trainer1', 6),
('charizard', 'fire', 'flying', 'Trainer2', 1),
('venusaur', 'grass', 'poison', 'Trainer2', 2),
('blastoise', 'water', 'null', 'Trainer2', 3),
('pikachu', 'electric', 'null', 'Trainer2', 4),
('snorlax', 'normal', 'null', 'Trainer2', 5),
('lapras', 'water', 'ice', 'Trainer2', 6),
('charizard', 'fire', 'flying', 'Trainer3', 1),
('venusaur', 'grass', 'poison', 'Trainer3', 2),
('blastoise', 'water', 'null', 'Trainer3', 3),
('pikachu', 'electric', 'null', 'Trainer3', 4),
('snorlax', 'normal', 'null', 'Trainer3', 5),
('lapras', 'water', 'ice', 'Trainer3', 6);

-- Drop Old table, Create new table, do yourself a solid

DROP TABLE trainers;

DROP TABLE pokemon;

-- New Table

CREATE TABLE trainers (
    trainer_name VARCHAR (255),
    trainer_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    slot1 VARCHAR (255),
    slot2 VARCHAR (255),
    slot3 VARCHAR (255),
    slot4 VARCHAR (255),
    slot5 VARCHAR (255),
    slot6 VARCHAR (255)
);

INSERT INTO trainers (trainer_name, slot1, slot2, slot3, slot4, slot5, slot6)
VALUES
('Trainer1', 'charizard', 'venusaur', 'blastoise', 'pikachu', 'snorlax', 'lapras'),
('Trainer2', 'charizard', 'venusaur', 'blastoise', 'pikachu', 'snorlax', 'lapras'),
('Trainer3', 'charizard', 'venusaur', 'blastoise', 'pikachu', 'snorlax', 'lapras');