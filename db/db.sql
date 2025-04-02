CREATE DATABASE all_table_1;

// Connect to database
\c all_table_1 

SELECT * FROM trainers;

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