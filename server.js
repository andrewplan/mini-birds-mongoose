const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require( 'mongoose' );
const mongoUri = "mongodb://localhost:27017/birds-mongoose"
const port = 3000;

const app = express();
app.use( bodyParser.json() );

mongoose.connect( mongoUri );
mongoose.connection.once( 'open', () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );

const Sighting = require( './Sighting' );

app.post('/api/sighting', function(req, res) {
  new Sighting( req.body ).save( ( err, sighting ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( sighting );
  } );
  console.log('POST sighting');
  // res.end();
});

app.get('/api/sighting', function(req, res) {
  Sighting.find( {}, ( err, sightings ) => {
    if ( err ) {
      return res.status( 500 ).json( err );
    }
    return res.status( 200 ).json( sightings );
  } );
  console.log('GET sighting');
  // res.end();
});

app.delete('/api/sighting', function(req, res) {
  Sighting.remove( req.query.id, ( err, sighting ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( sighting );
  } );
  console.log('DELETE sighting');
  // res.end();
});

app.put('/api/sighting', function(req, res) {
  Sighting.update( req.query.id, { $set: req.body }, ( err, sighting ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( sighting );
  } )
  console.log('PUT sighting');
  // res.end();
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
