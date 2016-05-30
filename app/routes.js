
// app/routes.js

var path = require('path');

// grab the article model
var Article = require('./models/article');

module.exports = function(app) {

   // server routes ===========================================================
   // handle things like api calls
   // authentication routes

   // sample api route
   app.get('/api/articles', function(req, res) {
       // use mongoose to get all articles in the database
       Article.find(function(err, articles) {

           // if there is an error retrieving, send the error.
                           // nothing after res.send(err) will execute
           if (err)
               res.send(err);

           res.json(articles); // return all nerds in JSON format
       });
   });

   // route to handle creating goes here (app.post)
   // route to handle delete goes here (app.delete)

   // frontend routes =========================================================
   // route to handle all angular requests
   app.get('*', function(req, res) {
       res.sendFile(path.join(__dirname, '../public/views/', 'index.html')); // load our public/index.html file
   });

};
