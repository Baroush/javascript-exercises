"use strict";
let result = "";
const repeatString = function (string, number) {
  for (let i = 0; i < number; i++) {
    result += string;
  }
  if (number === -1) {
    result = "ERROR";
  }
  return result;
};

const random = Math.trunc(Math.random() * 100);

// repeatString("hey", 0);
repeatString("hey", random);

// Do not edit below this line
module.exports = repeatString;
