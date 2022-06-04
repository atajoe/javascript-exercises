const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1,num2) {
	return num1 - num2
};

const sum = function(randomArray) {
	let finalValue = 0
  i = 0;
  while (i < randomArray.length){
    finalValue += randomArray[i]
    i++;
  }
  return finalValue;
};

const multiply = function(randomArray) {
  let finalValue = 1
  for (let i = 0; i < randomArray.length; i++){
    finalValue *= randomArray[i]
  }
  return finalValue;
};

const power = function(number, power) {
	return number**power;
};

const factorial = function(number) {
  let newNumber = 1;
  if (number < 1){
    return 1
  } else{
    for (let i = number-1; i >= 1; i--){
      newNumber *= number

    }
  }
  return newNumber;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
