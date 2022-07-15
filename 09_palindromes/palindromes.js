const palindromes = function (string) {
  let re = /[\W_]/g;
  const lowReStr = string.toLowerCase().replace(re, "");
  const revStr = lowReStr.split("").reverse().join("");
  return lowReStr === revStr;
};

palindromes("ZZZZ car, a man, a maracaz.");

// Do not edit below this line
module.exports = palindromes;
