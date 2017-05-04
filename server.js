var express = require('express');
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;


var app = express();
var filePath = path.join(__dirname, '/number.txt');
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    var newArray = [];
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var results = data.split(/\t|\n|\r/);
        for(var i = 0; i< results.length; i++) {
            if(results[i] !== '') {
                newArray.push('INSERT INTO bond (id, number, draw_id, prize) VALUES (ab'+','+ results[i].trim() +','+'11, first)');
            }
        }
        fs.writeFile('abcd.txt', newArray.join('\n'), function(err) {
            if (err)
                return console.log('err', err);
                console.log('file created');
        })
   });
});

app.listen(port, function () {
    console.log('App started on port ' + port);
});