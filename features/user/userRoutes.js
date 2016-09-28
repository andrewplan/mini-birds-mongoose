const userCtrl = require( './userCtrl' );

module.exports = app => {
    app.route( '/api/users' )
      .post( userCtrl.addUser )
      .get( userCtrl.getUsers );

    app.route( '/api/users/:id' )
      .put( userCtrl.updateUser )
      .delete( userCtrl.removeUser );

};
