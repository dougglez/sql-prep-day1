module.exports = {

  getPeople: function(req, res) {
    // get_people is an sql file
    const db = req.app.get('db');
    db.get_people()
      .then(response => res.status(200).send(response))
      .catch(err => res.send(err));
  },

  getPlaces: function(req, res) {
    const db = req.app.get('db');
    db.get_places()
      .then(response => res.status(200).send(response))
      .catch(err => res.send(err));
  },

  getPersonById: function(req, res) {
    const db = req.app.get('db');
    db.get_person_by_id(req.params.id)
      .then(response => res.status(200).send(response))
      .catch(err => res.send(err));
  },

  getPlaceById: function(req, res) {
    const db = req.app.get('db');
    db.get_place_by_id(req.params.id)
      .then(response => res.status(200).send(response))
      .catch(err => res.send(err));
  },

  getPlacesByPerson: function(req, res) {
    const db = req.app.get('db');
    db.get_places_by_person(req.params.id)
      .then(response => res.status(200).send(response))
      .catch(err => res.send(err));
  },

  newPerson: function(req, res) {
    const db = req.app.get('db');
    db.new_person([req.body.name, req.body.age, req.body.occupation])
      .then(response => res.status(200).send(response))
      .catch(err => res.send(err));
  },

  newPlace: function(req, res) {
    const db = req.app.get('db');
    db.new_place([req.body.name, req.body.state, req.body.type, req.body.person_id])
      .then(response => res.status(200).send(response))
      .catch(err => res.send(err));
  }
};