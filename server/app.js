var express = require( 'express' );
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false });
// var calculator = require('../modules/calculator');
var numOne = 0;
var numTwo = 0;
var op = 'none';

var sendBackAnswer = {
  answer: 0,
};

//////////////////////Server Info////////////////////////////////////////////
app.listen('3000', 'localhost', function(){
  console.log('server is listening on 3000');
});

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});//end base url

/////////////////////Get and return info back to client/////////////////////////////////
app.post('/calculator',urlencodedParser, function(req, res){
  console.log('calculator (inside app.js) hit', req.body);
  numOne = Number(req.body.numOne);
    console.log(numOne);
  numTwo = Number(req.body.numTwo);
    console.log(numTwo);
  op = req.body.op;
    console.log(op);

    calculate();
    console.log('sendBackAnswer object:', sendBackAnswer);

    res.send(sendBackAnswer);
  });//end response

  /////////////////////Calculate///////////////////////////////////////////////////
  var calculate = function (){
    console.log('in non-module calculate');
    var result = 0;
    switch (op) {
      case 'add':
        console.log('choice: add');
        result = numOne + numTwo;
        sendBackAnswer.answer = result;
        break;
      case 'subtract':
        console.log('choice: subtract');
        result = numOne - numTwo;
        sendBackAnswer.answer = result;
        break;
      case 'multiply':
        console.log('choice: multiply');
        result = numOne * numTwo;
        sendBackAnswer.answer = result;
        break;
      case 'divide':
        console.log('choice: divide');
        result = numOne / numTwo;
        sendBackAnswer.answer = result;
        break;
    }
    console.log('switch answer:', sendBackAnswer);
    return sendBackAnswer;
  };

app.use(express.static('public'));
