const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, number)=> (total + number), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, number)=> (total * number));
};

const power = function(base, pow) {
  if (pow === 0){
    return 1;
  } else if (pow === 1){
    return base;
  } else{
    let total = base;
    for (let i = 1; i < pow; i++){
      total *= base;
    }
    return total;
  }
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
  for (let i = num; i > 1; i--){
    num *= (i-1);
  }
	return num;
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
