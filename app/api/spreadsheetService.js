// app/api/spreadsheetService.js

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
var app = require('../../server').app;


// Constructor
function SpreadsheetService() {
  this.doc = new GoogleSpreadsheet('1SdPgPIdjb6vwR7gx5VCRZv-27LmJ6cNpagm1Pl_WtCY');
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
            var creds = {
                client_email: process.env.SHEETS_EMAIL,
                private_key: process.env.SHEETS_KEY
            };
            console.log(creds);
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
            sheet.addRow({'Timestamp': curDate,
                          'First name': body.first_name,
                          'Last name': body.last_name,
                          'Email': body.email,
                          'Class' : body.class,
                          'Concentration' : body.concentration,
                          'Background' : body.background,
                          'First choice' : body.first_choice,
                          'Second choice' : body.second_choice,
                          'Third choice' : body.third_choice,
                          'Reasoning': body.reason}, function (err) {

                if(err) {
                    console.log('updating sheet failed with error ' + err);
                }
                else {
                    console.log('Application submitted!');
                }
            });

            step();
        }
    ]);
};

// export the class
module.exports = SpreadsheetService;
