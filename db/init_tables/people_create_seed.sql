DROP TABLE IF EXISTS people CASCADE;

CREATE TABLE IF NOT EXISTS people (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER,
    occupation TEXT
);

INSERT INTO people (name, age, occupation)
VALUES ('Braden', 17, 'Pro Server Crasher'),
('Jesse', 27, 'Dolphin Wrangler'),
('Matt Fields', 30, 'Kick Returner')
RETURNING *;