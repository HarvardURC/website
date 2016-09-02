var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
var app = require('../../server').app;
var api_config = require('../../config/api-config.json');
var request = require("request");

// Constructor
function SpreadsheetService() {
  this.doc = new GoogleSpreadsheet(api_config.application_doc);
}

// class methods
SpreadsheetService.prototype.submitApplication = function(body) {
  console.log(body);
  var self = this;
  var skip = false;
  var sheet;
  var curDate = (new Date()).toLocaleDateString();
  async.series([
    function setAuth(step) {
      var creds = require('../../config/hurc-web.json');
      self.doc.useServiceAccountAuth(creds, step);
    },
    function getInfoAndWorksheets(step) {
      self.doc.getInfo(function(err, info) {
        console.log('Loaded doc: '+info.title+' by '+info.author.email);
        sheet = info.worksheets[0];
        if (sheet == 'NULL')
        {
          console.log("couldn't find applications sheet");
          skip = true;
          step();
          return;

        }
        console.log('sheet: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
        step();
      });
    },
    function insertAppliation(step) {
      if (skip) {
        step();
        return;
      }
      sheet.addRow({
        'Timestamp': curDate,
        'First name': body.first_name,
        'Last name': body.last_name,
        'Email': body.email,
        'Class' : body.class,
        'Concentration' : body.concentration,
        'Background' : body.background,
        'First choice' : body.first_choice,
        'Second choice' : body.second_choice,
        'Third choice' : body.third_choice,
        'Reasoning': body.reason,
        'Why do you want to join' : body.why},
         function (err) {
          if(err) {
            console.log('updating sheet failed with error ' + err);
          }
          else {
            self._sendMessageToSlack("A new person has sent an application. Check it out here: <https://docs.google.com/spreadsheets/d/1SdPgPIdjb6vwR7gx5VCRZv-27LmJ6cNpagm1Pl_WtCY/edit>")
            console.log('Application submitted!');
          }
        });
      step();
    }
  ]);
};

SpreadsheetService.prototype._sendMessageToSlack = function(message) {
  var data = {
    "text" : message,
    "username": "keithbot"
  };
  request({
    url: api_config.slack_url,
    method: "POST",
    headers: {"content-type": "application/json",},
    json: true,
    body: data
    }, function (err, resp, body) {
      if (err) {
        console.log(err);
      } else {
        console.log("Slack responded with code: " + resp.statusCode);
        console.log(resp.body);
      }
    });
};

// export the class
module.exports = SpreadsheetService;
