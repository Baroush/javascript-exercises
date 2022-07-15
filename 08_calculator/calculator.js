const add = function (num1, num2) {
  const total = num1 + num2;
  return total;
};
add(2, 6);

const subtract = function (num1, num2) {
  const total = num1 - num2;
  return total;
};
subtract(10, 4);

const sum = function (para) {
  let sum = 0;
  for (i = 0; i < para.length; i++) {
    sum += para[i];
  }
  return sum;
};
sum([1, 3, 5, 7, 9]);

const multiply = function (para) {
  let sum = 1;
  for (i = 0; i < para.length; i++) {
    sum *= para[i];
  }
  return sum;
};
sum([2, 4, 6, 8, 10, 12, 14]);

const power = function (num1, num2) {
  let sum = num1 ** num2;
  return sum;
};
power(4, 3);

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  for (i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};
factorial(10);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
