// app/routes.js

var path = require('path');
var SpreadsheetService = require('./api/spreadsheetService');
var spreadsheetService = new SpreadsheetService();

module.exports = function(app) {

   // server routes ===========================================================
   // handle things like api calls
   // authentication routes

   // sample api route
   app.post('/api/signup', function(req, res) {
       spreadsheetService.submitApplication(req.body);
   });

   // frontend routes =========================================================
   // route to handle all angular requests
   app.get('*', function(req, res) {
       res.sendFile(path.join(__dirname, '../public/views/', 'index.html')); // load our public/index.html file
   });

};
