var calculate = function (numOne, numTwo, op){
  console.log('in module calculate');
  var result = 0;
  switch (operatorChosen) {
    case 'add':
      console.log('choice: add');
      result = numOne + numTwo;
      break;
    case 'subtract':
      console.log('choice: subtract');
      result = numOne - numTwo;
      break;
    case 'multiply':
      console.log('choice: multiply');
      result = numOne * numTwo;
      break;
    case 'divide':
      console.log('choice: divide');
      result = numOne / numTwo;
      break;
  }
  return result;
};

modules.export= calculate;
