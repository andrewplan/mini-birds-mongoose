const mongoose = require( 'mongoose' );
const Sighting = new mongoose.Schema( {
    name: { type: String, required: true, lowercase: true }
    , order: { type: String, maxlength: 20 }
    , status: { type: String, enum: [ 'least concern', 'least threatened', 'extinct' ] }
    , numberSeen: { type: Number, min: 1 }
    , confirmed: { type: Boolean, default: false }
} );

module.exports = mongoose.model( 'Sighting', Sighting );
