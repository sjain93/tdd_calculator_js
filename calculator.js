function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(array) {
  let output = 0
  for (var i = 0; i < array.length; i++) {
    output += array[i];
  }
  return output;
}

module.exports = {add, subtract, sum}
