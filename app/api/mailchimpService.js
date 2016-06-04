// app/api/mailchimpService.js

var app = require('../../server').app;
var api_config = require('../../config/api-config.json');
var request = require("request");

// Constructor
function MailchimpService() {}

// class methods
MailchimpService.prototype.subscribeFromForm = function(body) {
    var data = {
        "email" : {
            "email" : body.email
        },
        "apikey": api_config.mailchimp_key,
        "id":  api_config.mailchimp_list,
        "mergevars" : {
            "FNAME" : body.first_name,
            "LNAME" : body.last_name
        }
    };
    request({
    url: api_config.mailchimp_url,
    method: "POST",
    headers: {
        "content-type": "application/json",
        },
    json: true,
    body: data
    }, function (err, resp, body) {
        if (err) {
            console.log(err);
        } else {
            console.log("mailchimp responded with code: " + resp.statusCode);
            console.log(resp.body);
        }
    });
};

// export the class
module.exports = MailchimpService;
