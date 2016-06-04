// app/routes.js

var path = require('path');
var SpreadsheetService = require('./api/spreadsheetService');
var spreadsheetService = new SpreadsheetService();
var MailchimpService = require('./api/mailchimpService');
var mailchimpService = new MailchimpService();

module.exports = function(app) {

   // server routes ===========================================================
   // handle things like api calls
   // authentication routes

   // api route for submitting applications
   app.post('/api/signup', function(req, res) {
       spreadsheetService.submitApplication(req.body);
       res.send("success");
   });

   // api route for subscribing to mailing list
   app.post('/api/subscribe', function(req, res) {
       mailchimpService.subscribeFromForm(req.body);
       res.send("success");
   });

   // frontend routes =========================================================
   // route to handle all angular requests
   app.get('*', function(req, res) {
       res.sendFile(path.join(__dirname, '../public/views/', 'index.html')); // load our public/index.html file
   });

};
