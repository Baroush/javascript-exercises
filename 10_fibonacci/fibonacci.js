// const fibonacci = function (num) {
//   let a = 0;
//   let b = 1;
//   let c = 1;
//   for (i = 2; i <= num; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return c;
// };
const fibonacci = function (num) {
  const num1 = +num;
  if (num1 < 0) {
    return "OOPS";
  }
  if (num1 <= 1) {
    return num1;
  } else {
    return fibonacci(num1 - 1) + fibonacci(num1 - 2);
  }
};
fibonacci(3);
// Do not edit below this line
module.exports = fibonacci;
