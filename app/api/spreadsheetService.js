// app/api/spreadsheetService.js

var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
var app = require('../app');

function submitApplication (req) {
    console.log(req)
    //
    // async.series([
    //     function setAuth(step) {
    //         var creds = require('../config/hurc-web.json');
    //         self.FINdoc.useServiceAccountAuth(creds, step);
    //     },
    //     function getInfoAndWorksheets(step) {
    //         self.FINdoc.getInfo(function(err, info) {
    //             console.log('Loaded doc: '+info.title+' by '+info.author.email);
    //             sheet = self._findSheetByName(info.worksheets, 'Orders');
    //             if (sheet == 'NULL')
    //             {
    //                 console.log("couldn't find orders sheet");
    //                 skip = true;
    //                 step();
    //                 return;
    //
    //             }
    //             console.log('sheet: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
    //             step();
    //         });
    //     },
    //     function insertOder(step) {
    //         if (skip) {
    //             step();
    //             return;
    //         }
    //         sheet.addRow({'Date Submitted': curDate,
    //                       'Team': order.team,
    //                       'link': order.url.substring(1, order.url.length-1),
    //                       'Quantity': order.quantity,
    //                       'Comment': order.comment}, function (err) {
    //
    //             if(err) {
    //                 console.log('updating sheet failed with error ' + err);
    //                 self._replyWithResponse(message, "I've done goofed!");
    //             }
    //             else {
    //                 self._notifyFinancialOfficer("An order has been submitted for " + order.team);
    //                 self._replyWithResponse(message, "Order submitted!");
    //             }
    //         });
    //
    //         step();
    //     }
    // ]);
}
