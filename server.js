var express=require('express')
var app = express();
var quotesRepo = require('./quotesRepo');
var port = process.env.PORT || 3001;

app.get('/quotes/:name?', function (req, res) {

    res.json(quotesRepo.getRandom(req.params.name || null));
});

app.listen(port, function () {
    console.log('Server running on port', port);
})