const ftoc = function (degrees) {
  const temp = (degrees - 32) * 0.5556;
  const temp2 = +temp.toFixed(1);
  return temp2;
};

ftoc(-100);

const ctof = function (deg) {
  const temp = deg * 1.8 + 32;
  const temp2 = +temp.toFixed(1);
  return temp2;
};

ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
