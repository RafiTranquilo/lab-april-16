// - PROBLEM 1
function sum(a, b) {
  // console.log('The sum of ' + a + ' and ' + b + ' is ' + sum(a, b));
  return a + b;
}
//looks great!

// - PROBLEM 2
function multiply(c, d) {
  // console.log('The product of ' + c + ' and ' + d + ' is ' + (c * d));
  return c * d;
}

// - PROBLEM 3
function sumAndMultiply(e, f, g) {
  var output = [];
  output.push(sum(sum(e, f), g));
  output.push(multiply(multiply(e, f), g));
  console.log(e + ' and ' + f + ' and ' + g + ' sum to ' + output[0]);
  console.log('The numbers ' + e + ' and ' + f + ' and ' + g + ' have a product of ' + output[1]);
  return output;
}
//These first three look like mine. 

// - PROBLEM 4
var total = 0;
function sumArray(input) {
  for (var i = 0; i < input.length; i++) {
    total = total + input[i];
  }
  console.table(input);
  console.log(input + ' was passed into the array, and ' + total + ' is their sum.');
}

// - PROBLEM 5
var newTotal = 1;
function multiplyArray(input) {
  for (var i = 0; i < input.length; i++) {
    newTotal = newTotal * input[i];
  }
  console.table(input);
  console.log(input + ' was passed into the array, and have a product of ' + newTotal);
}
//Was this changed from earlier today to fix problems with question 6?
