const mongoose = require( 'mongoose' );

const User = new mongoose.Schema( {
    email: { type: String, required: true, trim: true }
    , username: { type: String, required: true, trim: true }
    , level: { type: Number, min: 0, max: 100, trim: true }
    , location: { type: String, required: true, trim: true }
    , member: { type: Boolean, default: true }
    // , updatedAt: { type: String }
} );

module.exports = mongoose.model( 'User', User );
