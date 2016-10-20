var http = require('http'),
    express = require('express'),
    twilio = require('twilio'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;
 
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function(req, res) {
//Create TwiML response
    var twiml = new twilio.TwimlResponse();
    /*var link_regex = new RegExp("link","g");
    var itunes_regex = new RegExp("itunes","g");
    var appbox_regex = new RegExp("appbox","g");
   
    var link = link_regex.test(req.body.Body.toLowerCase());
   var itunes = itunes_regex.test(req.body.Body.toLowerCase());
    var appbox = appbox_regex.test(req.body.Body.toLowerCase());*/
   
    
    console.log("Req.body");
   console.log(req.body);
    console.log("Req.body.Body");
    console.log(req.body.Body)
 
    if (req.body.Body.toLowerCase()=='help') {
        twiml.message('Hello there! Please choose from the following options: \n\r \'internet\' \n\r\'phone\' \n\r \'cable\'. Thank you!');
    } else if(req.body.Body.toLowerCase()=='internet') {
        twiml.message('Hi! We see you are having issues with your internet.');
    } else if(req.body.Body.toLowerCase()=='cable') {
        twiml.message('Hi! We see you are having issues with your cable service.');
    } 
    else if(req.body.Body.toLowerCase()=='phone') {
        twiml.message('Hi! We see you are having issues with your phone service.');
    }
    else {
        twiml.message('Thank you for your message. Our team will get back to you shortly');
    }
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});
 
http.createServer(app).listen(port, function () {
    console.log("Express server listening on port 3000");
});