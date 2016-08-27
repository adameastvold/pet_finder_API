var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/Pet_Center';

router.post('/', function(req, res) {
  var animal = req.body;
  console.log('this is your animal request before it hits the server:', animal);

  pg.connect(connectionString, function(err, client, done) {
    if(err){
      res.sendStatus(500);
      console.log('error in POST, pg.connect', err, "\n \n \n \n ");
    };

    var queryString = 'INSERT INTO favorites (name, description, image) VALUES ($1, $2, $3)'
    var referenceValues = [animal.name, animal.description, animal.photo];

    console.log(animal, animal.name);

    client.query(queryString, referenceValues,

        function(err, result) {
          done();
          if(err) {
            res.sendStatus(500);
            console.log("error in POST, client.query", err, "\n \n \n \n ");
            return;
          }
          res.send(result.rows);
        });
      });
});

module.exports = router;
