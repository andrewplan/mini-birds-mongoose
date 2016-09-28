const mongoose = require( 'mongoose' );

const Bird = new mongoose.Schema( {
  name: { type: String, required: true, lowercase: true }
  , order: { type: String, maxlength: 20 }
  , status: { type: String, enum: [ 'least concern', 'least threatened', 'extinct' ] }
} );

module.exports = Bird;
