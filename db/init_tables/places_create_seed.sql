DROP TABLE places;

CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    name TEXT,
    state TEXT,
    type TEXT,
    person_id INTEGER REFERENCES people(id)
);


INSERT INTO places (name, state, type, person_id)
VALUES ('DevMountain', 'AZ', 'School', 1),
('DVMTN', 'UT', 'School', 2),
('DevMtn', 'TX', 'School', 3);