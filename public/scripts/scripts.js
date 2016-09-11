console.log('JS is sourced');

var answer = 0;
var quack = new Audio("../sounds/quack.mp3");

var firstNumber;
var secondNumber;
var operatorChosen;
var dataToSend = {
  numOne: 0,
  numTwo: 0,
  op: 'NA'
};

//////////////DOCUMENT READY/ GET INFO ON CLICK////////////////////////////////////////////
$(document).ready(function(){
  console.log('JQuery is sourced');

  $('.buttons').on('click', function(){
    console.log('getInfo clicked');
    $('#answer');

    // firstNumber = Number($('#numberOne').val());
    // secondNumber = Number($('#numberTwo').val());
    // operatorChosen = $('#operator').val();
    // console.log('numberOne =', firstNumber + ' | ' + 'numberTwo =', secondNumber + ' | ' + 'operator is', operatorChosen);
    // dataToSend.numOne = firstNumber;
    // dataToSend.numTwo = secondNumber;
    // getOperator();
    // ajaxPost();
  });

  $('#resetAll').on('click', function () {
      console.log('restarting...');
      window.location.reload();
    }); // end restart click

});

///////////////////////////////AJAX POST////////////////////////////////////////////
var ajaxPost = function(){
  $.ajax({
    type: 'POST',
    url: '/calculator',
    data: dataToSend,
    success: function(data){
      console.log('ajax success:', data);
      answer = data.answer;
      displayAnswer();
    }
  });
};

//////////////////////Get Operator via switch////////////////////////////////////////////
  var getOperator = function(){
    console.log('in getOperator');
    operatorChosen = $('#operator').val();
    switch (operatorChosen) {
      case 'add':
        console.log('choice: add');
        dataToSend.op = 'add';
        break;
      case 'subtract':
        console.log('choice: subtract');
        dataToSend.op = 'subtract';
        break;
      case 'multiply':
        console.log('choice: multiply');
        dataToSend.op = 'multiply';
        break;
      case 'divide':
        console.log('choice: divide');
        dataToSend.op = 'divide';
        break;
    }
    console.log('dataToSend', dataToSend);
  };

//////////////////////displayAnswer////////////////////////////////////////////
var displayAnswer= function(){
  $('#answer').fadeOut('slow', function(){
      $('#answer').fadeIn().html('<h3>= ' + answer + '</h3>');
    });
};
