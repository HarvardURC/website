
// app/routes.js

var path = require('path');

module.exports = function(app) {

   // server routes ===========================================================
   // handle things like api calls
   // authentication routes

   // sample api route
   app.post('/api/signup', function(req, res) {
       
   });

   // frontend routes =========================================================
   // route to handle all angular requests
   app.get('*', function(req, res) {
       res.sendFile(path.join(__dirname, '../public/views/', 'index.html')); // load our public/index.html file
   });

};
