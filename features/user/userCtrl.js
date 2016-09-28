const User = require( './User' );

module.exports = {
    addUser( req, res ) {
        new User( req.body ).save( ( err, user ) => {
            if ( err ) {
                return res.status( 500 ).json( err );
            }
            return res.status( 201 ).json( user );
        } );
    }
    , getUsers( req, res ) {
        User.find( {}, ( err, users ) => {
            if ( err ) {
                return res.status( 500 ).json( err );
            }
            return res.status( 200 ).json( users );
        } );
    }
    , updateUser( req, res ) {
        User.findByIdAndUpdate( req.params.id, { $set: req.body }, ( err, user ) => {
            if ( err ) {
                return res.status( 500 ).json( err );
            }
            return res.status( 200 ).json( user );
        } );
    }
    , removeUser( req, res ) {
        User.findByIdAndRemove( req.params.id, ( err, user ) => {
            if ( err ) {
                return res.status( 500 ).json( err );
            }
            return res.status( 200 ).json( user );
        } );
    }
}
