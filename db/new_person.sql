INSERT INTO people (name, age, occupation)
VALUES ($1, $2, $3)
RETURNING *;