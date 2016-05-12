var express = require('express');

var app = express();

app.route('/').get(function (req, res) {
    var software = req.headers['user-agent'].match(/\((.*?)\)/)[0];
    res.json({
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',', 1)[0],
        software: software.substring(1, software.length-1)
    });
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
