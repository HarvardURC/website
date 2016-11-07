var path = require('path');
var SpreadsheetService = require('./api/spreadsheetService');
var spreadsheetService = new SpreadsheetService();
var MailchimpService = require('./api/mailchimpService');
var mailchimpService = new MailchimpService();

module.exports = function(app) {

  app.post('/api/signup', function(req, res) {
    spreadsheetService.submitApplication(req.body);
    res.send("success");
  });

  app.post('/api/subscribe', function(req, res) {
    mailchimpService.subscribeFromForm(req.body);
    res.send("success");
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/views/', 'index.html'));
  });
};
