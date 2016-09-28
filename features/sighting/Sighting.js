const mongoose = require( 'mongoose' );
const Bird = require( '../bird/Bird' );

const Sighting = new mongoose.Schema( {
    bird: [ Bird ]
    , numberSeen: { type: Number, min: 1 }
    , confirmed: { type: Boolean, default: false }
    , user: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true } ]
} );

module.exports = mongoose.model( 'Sighting', Sighting );
