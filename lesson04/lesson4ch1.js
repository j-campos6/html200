/**javascript connectioncheck**/
console.log('javascript is working');

/******************Function to square number******************/
function numberSquare(){
  /**Prompt for user inputs of number to square**/
  let input = prompt("Enter number you would like to square:");

  /**Square user number**/
  output = input**2;

  /**Alert user with the result**/
  let result = alert('Your number squared is:' + ' ' + output);
}

/******************Function to multiply 2 numbers******************/
function multiply2(){
  /**Prompt for user inputs of number to square**/
  let input1 = prompt("Enter first number to multiply:");

  /**Prompt for user inputs of number to square**/
  let input2 = prompt("Enter second number to multiply:");

  /**Square user number**/
  output = input1*input2;

  /**Alert user with the result**/
  let result = alert('Your numbers multiplied equal:' + ' ' + output);
}
