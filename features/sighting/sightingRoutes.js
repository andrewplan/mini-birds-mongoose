const sightingCtrl = require( './sightingCtrl' );

module.exports = app => {
  app.route( '/api/sightings' )
      .get( sightingCtrl.getSightingsByUserId )
      .get( sightingCtrl.getSightings )
      .post( sightingCtrl.addSighting )
      .delete( sightingCtrl.removeSighting )

  app.route( '/api/sightings/:id' )
      .put( sightingCtrl.addUserToSighting )
      .put( sightingCtrl.addBirdToSighting );

};
