SELECT places.id, places.name, places.state, places.type FROM places
JOIN people ON people.id = places.person_id
WHERE people.id = $1;