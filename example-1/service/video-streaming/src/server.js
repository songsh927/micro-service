const app = require('./app.js');

const PORT = process.env.SERVER_PORT;

const server = app.listen( PORT, function(){
  console.log('Express listening on port', PORT);
});
