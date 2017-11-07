var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
var warmth = 50;
var progress = [":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:", ":red_circle:"]

var usercount = 0; 
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', function (req, res) { res.status(200).send('Hello world! There are ' + usercount + ' users online today!'); });
usercount += 1;
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/hello', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ", welcome to the Daedalus ARG! I'm Daedalus, and I'll be your host!"
  };

  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});
app.post('/:sunny:', function (req, res, next) {
  var userName = req.body.user_name;
  if(warmth < 100) {
    warmth += 5;
  }
  else {
    wamth = 100;
  }
  for(var x = 0; x < warmth/5; x++){
    progress[x] = ":white_check_mark:"
  }
  var progressMsg = 'Yum! Thanks, ' + userName + "! My warmth is now at " + warmth + '%!\n';
  for(var y = 0; y < progress.length; y++) {
    progressMsg += progress[y];
  }
  var botPayload = {
    text : progressMsg
  };

  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});