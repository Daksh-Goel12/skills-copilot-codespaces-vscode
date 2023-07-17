// Create web server

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

// app.use('/', express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

router.get('/api/comments', function(req, res) {
    fs.readFile(COMMENTS_FILE, function(err, data) {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

router.post('/api/comments', function(req, res) {
    fs.readFile(COMMENTS_FILE, function(err, data) {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        var comments = JSON.parse(data);
        var newComment = {
            id: Date.now(),
