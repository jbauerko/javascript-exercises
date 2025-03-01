const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  res = 0;
  for (let i=0; i<nums.length; i++) {
    res += nums[i];
  }
  return res;
};

const multiply = function(nums) {
  product = 1;
  for (let i=0; i<nums.length; i++) {
    product *= nums[i];
  }
  return product;
};

const power = function(b, e) {
	res = 1;
  for (let i=0; i<e;i++) {
    res *= b;
  }
  return res;
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
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
