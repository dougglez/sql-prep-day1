// Does all the hard work of creating servers, and parsing urls.
// Gives us methods like .get(), .post() etc.
const express = require("express");

// makes sure all the info we send/receive is formatted to json
const bodyParser = require("body-parser");

// sets headers for our requests and responses (security stuff)
const cors = require("cors");

// connects server to db
const massive = require("massive");

const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
// after initial set up, create a db with heroku

massive({
  host: 'ec2-54-225-88-191.compute-1.amazonaws.com',
  database: 'das23iriuftrt',
  user: 'hlbjrkhiokstdl',
  port: 5432,
  password: '579aaa2a6a9c806162588f36a854f97d2254b5cf54ccdbc3d8c5f5bb11628191',
  ssl:true
})
  .then((db) => {
  // db is the connection from massive. We'll need to invoke that
    // whenever we want to use an sql file
    // ie. db.get_users()

    // we need to save the variable db to our server so we can use it in other files
    app.set('db', db);
    const ctrl = require('./serverCtrl');

    // db.init_tables.people_create_seed()
    //   .then(res => console.log('People Table created'))
    //   .catch(err => console.log(err));
    //
    // db.init_tables.places_create_seed()
    //   .then(res => console.log('Places Table created'))
    //   .catch(err => console.log(err));


    // ENDPOINTS:
// GET
    app.get('/api/people', ctrl.getPeople);

    app.get('/api/places', ctrl.getPlaces);

    app.get('/api/people/:id', ctrl.getPersonById);

    app.get('/api/places/:id', ctrl.getPlaceById);

    app.get('/api/people/:id/places', ctrl.getPlacesByPerson);

// POST
    app.post('/api/people', ctrl.newPerson);

    app.post('/api/places', ctrl.newPlace);

  }) //end of massive connection
  .catch((err) => console.log(err));


// Tells our server to handle requests that come in on the specified port
app.listen(port, function() {
  console.log(`running on port ${port}`)
});