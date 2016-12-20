var express = require('express');
var twilio = require('twilio');
var app = express();

app.set('port', (process.env.PORT || 5000))

// Index route
app.get('/', function(req, res) {
  


var accountSid = 'ACfdad1c79d6a33aaad87c6deb3c3ab6fc';
var authToken = "5bb71913d6101e8a3b2f26990369c5c5";
var client = twilio(accountSid, authToken);
console.log(client)

client.messages.create({
    to: "+573007055866",
    from: "+13857225067",
    body: "test",
    media_url: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg"
}, function(err, message) { 
	console.log('errorrr--> ' +err); 
	console.log('OK    -->  ' +message); 
}); 

function err(){}
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})