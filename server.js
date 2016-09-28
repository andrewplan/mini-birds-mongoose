const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require( 'mongoose' );
const mongoUri = "mongodb://localhost:27017/birds-mongoose"
const port = 3000;

const app = express();
app.use( bodyParser.json() );

require( './masterRoutes' )( app );

mongoose.connect( mongoUri );
mongoose.connection.once( 'open', () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );

app.listen(port, function() {
  console.log("Started server on port", port);
});
