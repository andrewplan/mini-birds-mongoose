const Sighting = require( './Sighting' );

module.exports = {
    addSighting( req, res ) {
        new Sighting( req.body ).save( ( err, sighting ) => {
            if ( err ) {
              return res.status( 500 ).json( err );
            }
            return res.status( 201 ).json( sighting );
        } );
        console.log('POST sighting');
    }
    , getSightings( req, res ) {
          Sighting
            .find()
            .populate( 'user' )
            .exec( ( err, sightings ) => {
                if ( err ) {
                  return res.status( 500 ).json( err );
                }
                return res.status( 200 ).json( sightings );
              } );
            console.log('GET sighting');
    }
    , removeSighting( req, res ) {
          Sighting.remove( req.query.id, ( err, sighting ) => {
              if ( err ) {
                return res.status( 500 ).json( err );
              }
              return res.status( 200 ).json( sighting );
          } );
          console.log('DELETE sighting');

    }
    , addUserToSighting( req, res ) {
          Sighting.findByIdAndUpdate( req.params.id, { $set: { user: req.body.user } }, ( err, sighting ) => {
              if ( err ) {
                return res.status( 500 ).json( err );
              }
              return res.status( 200 ).json( sighting );
          } );
          console.log('PUT sighting');
    }
    , addBirdToSighting( req, res ) {
          Sighting.findByIdAndUpdate( req.params.id, { $push: { birds: req.body } }, ( err, sighting ) => {
              if ( err ) {
                return res.status( 500 ).json( err );
              }
              return res.status( 200 ).json( sighting );
          } );
    }
    , getSightingsByUserId( req, res ) {
          Sighting.find( { user: req.query.id }, ( err, sightings ) => {
              if ( err ) {
                  return res.status( 500 ).json( err );
              }
              return res.status( 200 ).json( sightings );
          } );
    }
};
