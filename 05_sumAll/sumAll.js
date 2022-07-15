const sumAll = function () {
  let sum = 0;
  for (let i = num1; i < num2 + 1; i++) {
    sum += i;
  }
  sum = +sum;
  return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
