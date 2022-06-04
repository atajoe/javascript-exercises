const ftoc = function(temp) {
  const temptoc = (temp-32) * 5/9
  return Math.round(temptoc * 10) / 10;

};

const ctof = function(temp) {
  const temptof = (temp * 9/5) + 32
  return Math.round(temptof * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
