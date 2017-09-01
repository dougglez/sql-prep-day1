INSERT INTO places (name, state, type, person_id)
VALUES ($1, $2, $3, $4)
RETURNING *;